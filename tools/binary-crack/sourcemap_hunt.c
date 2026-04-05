/*
 * sourcemap_hunt.c - Binary scanner for sourcemap artifacts
 *
 * Scans arbitrary binary files for:
 *   1. sourceMappingURL references
 *   2. debugId UUIDs
 *   3. Zlib-compressed sourcemap blobs (magic bytes 0x78 0x01/0x9C/0xDA)
 *   4. JSON sourcemap signatures ("mappings":, "sources":, "sourcesContent":)
 *
 * Build: cc -O2 -o sourcemap_hunt sourcemap_hunt.c -lz
 * Usage: ./sourcemap_hunt <file_or_directory> [--deep]
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <dirent.h>
#include <zlib.h>

#define BUF_SIZE (4 * 1024 * 1024)
#define DECOMP_SIZE (16 * 1024 * 1024)
#define MAX_HITS 10000

typedef struct {
    const char *file;
    long offset;
    const char *type;
    char detail[512];
} Hit;

static Hit hits[MAX_HITS];
static int hit_count = 0;
static int deep_mode = 0;

static void add_hit(const char *file, long offset, const char *type, const char *detail) {
    if (hit_count >= MAX_HITS) return;
    Hit *h = &hits[hit_count++];
    h->file = file;
    h->offset = offset;
    h->type = type;
    snprintf(h->detail, sizeof(h->detail), "%s", detail);
}

static const char *NEEDLES[] = {
    "sourceMappingURL",
    "debugId",
    "\"mappings\"",
    "\"sources\"",
    "\"sourcesContent\"",
    "sourceMap",
    ".js.map",
    "source-map",
    "9532a3aa-2187-5fcc-a27f-c91f44503cc5",
    NULL
};

static void scan_buffer(const char *file, const unsigned char *buf, size_t len, long base_offset) {
    for (int n = 0; NEEDLES[n]; n++) {
        const char *needle = NEEDLES[n];
        size_t nlen = strlen(needle);
        for (size_t i = 0; i + nlen <= len; i++) {
            if (memcmp(buf + i, needle, nlen) == 0) {
                char ctx[256];
                int ctx_start = (i > 40) ? (int)(i - 40) : 0;
                int ctx_end = (i + nlen + 40 < len) ? (int)(i + nlen + 40) : (int)len;
                int ctx_len = ctx_end - ctx_start;
                if (ctx_len > 250) ctx_len = 250;
                for (int j = 0; j < ctx_len; j++) {
                    unsigned char c = buf[ctx_start + j];
                    ctx[j] = (c >= 32 && c < 127) ? c : '.';
                }
                ctx[ctx_len] = '\0';
                add_hit(file, base_offset + (long)i, needle, ctx);
            }
        }
    }
}

static void try_zlib_inflate(const char *file, const unsigned char *buf, size_t pos, size_t len) {
    if (!deep_mode) return;
    if (pos + 2 > len) return;

    unsigned char b0 = buf[pos], b1 = buf[pos + 1];
    if (b0 != 0x78) return;
    if (b1 != 0x01 && b1 != 0x9C && b1 != 0xDA) return;

    size_t avail = len - pos;
    if (avail > 2 * 1024 * 1024) avail = 2 * 1024 * 1024;

    unsigned char *out = malloc(DECOMP_SIZE);
    if (!out) return;

    z_stream strm = {0};
    strm.next_in = (unsigned char *)(buf + pos);
    strm.avail_in = (uInt)avail;
    strm.next_out = out;
    strm.avail_out = DECOMP_SIZE;

    if (inflateInit(&strm) != Z_OK) { free(out); return; }
    int ret = inflate(&strm, Z_FINISH);
    inflateEnd(&strm);

    if ((ret == Z_STREAM_END || ret == Z_OK) && strm.total_out > 100) {
        scan_buffer(file, out, strm.total_out, (long)pos);

        if (strm.total_out > 50) {
            int looks_like_map = 0;
            if (memmem(out, strm.total_out, "\"mappings\"", 10)) looks_like_map = 1;
            if (memmem(out, strm.total_out, "\"sources\"", 9)) looks_like_map = 1;

            if (looks_like_map) {
                char detail[512];
                snprintf(detail, sizeof(detail),
                    "ZLIB-INFLATED sourcemap candidate! offset=%ld compressed_size~%lu decompressed=%lu",
                    (long)pos, avail, strm.total_out);
                add_hit(file, (long)pos, "ZLIB_SOURCEMAP", detail);
            }
        }
    }
    free(out);
}

static void scan_file(const char *path) {
    FILE *f = fopen(path, "rb");
    if (!f) return;

    struct stat st;
    if (fstat(fileno(f), &st) != 0 || st.st_size == 0) { fclose(f); return; }

    unsigned char *buf = malloc(BUF_SIZE);
    if (!buf) { fclose(f); return; }

    long total = 0;
    size_t overlap = 256;
    size_t nread;

    while ((nread = fread(buf + (total == 0 ? 0 : overlap),
                          1, BUF_SIZE - (total == 0 ? 0 : overlap), f)) > 0) {
        size_t chunk = nread + (total == 0 ? 0 : overlap);
        long base = total - (total == 0 ? 0 : (long)overlap);
        scan_buffer(path, buf, chunk, base);

        if (deep_mode) {
            for (size_t i = 0; i + 2 < chunk; i += 4096) {
                try_zlib_inflate(path, buf, i, chunk);
            }
        }

        total += (long)nread;
        if (nread < BUF_SIZE - overlap) break;
        memmove(buf, buf + chunk - overlap, overlap);
    }

    free(buf);
    fclose(f);
}

static void scan_directory(const char *dirpath) {
    DIR *d = opendir(dirpath);
    if (!d) return;

    struct dirent *ent;
    while ((ent = readdir(d)) != NULL) {
        if (ent->d_name[0] == '.') continue;

        char full[4096];
        snprintf(full, sizeof(full), "%s/%s", dirpath, ent->d_name);

        struct stat st;
        if (stat(full, &st) != 0) continue;

        if (S_ISDIR(st.st_mode)) {
            scan_directory(full);
        } else if (S_ISREG(st.st_mode) && st.st_size > 0) {
            if (st.st_size > 500 * 1024 * 1024) continue;
            scan_file(full);
        }
    }
    closedir(d);
}

int main(int argc, char **argv) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s <file_or_dir> [--deep]\n", argv[0]);
        return 1;
    }

    for (int i = 2; i < argc; i++) {
        if (strcmp(argv[i], "--deep") == 0) deep_mode = 1;
    }

    struct stat st;
    if (stat(argv[1], &st) != 0) {
        perror(argv[1]);
        return 1;
    }

    fprintf(stderr, "[sourcemap_hunt] scanning %s %s...\n",
            argv[1], deep_mode ? "(deep zlib mode)" : "");

    if (S_ISDIR(st.st_mode)) {
        scan_directory(argv[1]);
    } else {
        scan_file(argv[1]);
    }

    printf("{\n  \"total_hits\": %d,\n  \"hits\": [\n", hit_count);
    for (int i = 0; i < hit_count; i++) {
        printf("    {\"file\": \"%s\", \"offset\": %ld, \"type\": \"%s\", \"context\": \"",
               hits[i].file, hits[i].offset, hits[i].type);
        for (const char *p = hits[i].detail; *p; p++) {
            if (*p == '"') printf("\\\"");
            else if (*p == '\\') printf("\\\\");
            else if (*p == '\n') printf("\\n");
            else putchar(*p);
        }
        printf("\"}%s\n", (i < hit_count - 1) ? "," : "");
    }
    printf("  ]\n}\n");

    fprintf(stderr, "[sourcemap_hunt] done. %d hits found.\n", hit_count);
    return 0;
}
