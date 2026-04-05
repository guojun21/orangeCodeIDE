/*
 * deep_scan.c - Deep binary scanner for embedded sourcemaps and debug data
 *
 * Scans binary files for:
 *   1. Zlib-compressed blobs (try inflate every candidate offset)
 *   2. Base64-encoded sourcemap data URIs
 *   3. JSON sourcemap fragments
 *   4. V8 serialization markers
 *   5. Webpack/esbuild module boundary signatures
 *
 * Build: cc -O2 -o deep_scan deep_scan.c -lz
 * Usage: ./deep_scan <file> [--zlib] [--base64] [--module-map]
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <ctype.h>
#include <zlib.h>

#define MAX_INFLATE_OUT (64 * 1024 * 1024)

static int do_zlib = 0;
static int do_base64 = 0;
static int do_modmap = 0;
static int zlib_hits = 0;
static int base64_hits = 0;

static void scan_zlib(const unsigned char *data, size_t size, const char *path) {
    fprintf(stderr, "[deep_scan] zlib scan: %zu bytes...\n", size);

    unsigned char *out = malloc(MAX_INFLATE_OUT);
    if (!out) return;

    int checked = 0;
    for (size_t i = 0; i + 2 < size; i++) {
        if (data[i] != 0x78) continue;
        unsigned char b1 = data[i + 1];
        if (b1 != 0x01 && b1 != 0x9C && b1 != 0xDA) continue;

        size_t avail = size - i;
        if (avail > 8 * 1024 * 1024) avail = 8 * 1024 * 1024;

        z_stream strm = {0};
        strm.next_in = (unsigned char *)(data + i);
        strm.avail_in = (uInt)avail;
        strm.next_out = out;
        strm.avail_out = MAX_INFLATE_OUT;

        if (inflateInit(&strm) != Z_OK) continue;
        int ret = inflate(&strm, Z_FINISH);
        inflateEnd(&strm);
        checked++;

        if ((ret == Z_STREAM_END || ret == Z_OK) && strm.total_out > 200) {
            int has_mappings = (memmem(out, strm.total_out, "\"mappings\"", 10) != NULL);
            int has_sources = (memmem(out, strm.total_out, "\"sources\"", 9) != NULL);
            int has_names = (memmem(out, strm.total_out, "\"names\"", 7) != NULL);
            int has_json_start = (out[0] == '{');

            if (has_mappings && has_sources) {
                printf("ZLIB_SOURCEMAP offset=%zu compressed_hint=%lu decompressed=%lu\n",
                       i, avail, strm.total_out);

                char outpath[512];
                snprintf(outpath, sizeof(outpath), "%s.zlib_sourcemap_%zu.json", path, i);
                FILE *of = fopen(outpath, "wb");
                if (of) {
                    fwrite(out, 1, strm.total_out, of);
                    fclose(of);
                    printf("  -> saved to %s\n", outpath);
                }
                zlib_hits++;
            } else if (has_json_start && strm.total_out > 1000) {
                char preview[201];
                size_t plen = strm.total_out < 200 ? strm.total_out : 200;
                memcpy(preview, out, plen);
                preview[plen] = '\0';
                for (size_t j = 0; j < plen; j++) {
                    if ((unsigned char)preview[j] < 32) preview[j] = ' ';
                }
                printf("ZLIB_JSON offset=%zu decompressed=%lu preview=%.200s\n",
                       i, strm.total_out, preview);
                zlib_hits++;
            } else if (strm.total_out > 10000) {
                int printable = 0;
                size_t sample = strm.total_out < 1000 ? strm.total_out : 1000;
                for (size_t j = 0; j < sample; j++) {
                    if (out[j] >= 32 && out[j] < 127) printable++;
                }
                float ratio = (float)printable / sample;
                if (ratio > 0.7) {
                    printf("ZLIB_TEXT offset=%zu decompressed=%lu printable_ratio=%.2f\n",
                           i, strm.total_out, ratio);
                    zlib_hits++;
                }
            }
        }
    }

    free(out);
    fprintf(stderr, "[deep_scan] zlib: checked %d candidates, found %d hits\n", checked, zlib_hits);
}

static void scan_base64_sourcemaps(const unsigned char *data, size_t size) {
    const char *needle = "data:application/json;";
    size_t nlen = strlen(needle);

    for (size_t i = 0; i + nlen < size; i++) {
        if (memcmp(data + i, needle, nlen) == 0) {
            char ctx[256];
            size_t ctx_len = (size - i < 255) ? (size - i) : 255;
            memcpy(ctx, data + i, ctx_len);
            ctx[ctx_len] = '\0';
            for (size_t j = 0; j < ctx_len; j++) {
                if ((unsigned char)ctx[j] < 32) ctx[j] = '.';
            }
            printf("BASE64_DATA_URI offset=%zu context=%.255s\n", i, ctx);
            base64_hits++;
        }
    }
    fprintf(stderr, "[deep_scan] base64: found %d data URI hits\n", base64_hits);
}

static void scan_module_map(const unsigned char *data, size_t size) {
    /*
     * Look for AMD/webpack define() patterns that reveal module names:
     * define("out-build/vs/...", [...], function(...) { ... })
     * Also look for esbuild __require patterns
     */
    int module_count = 0;

    const char *patterns[] = {
        "define(\"out-build/",
        "define(\"packages/",
        "define(\"node_modules/",
        "__toModule(require(",
        "var Ae=Object.create",
        "var Ae=Object.defineProperty",
        NULL
    };

    for (int p = 0; patterns[p]; p++) {
        size_t plen = strlen(patterns[p]);
        for (size_t i = 0; i + plen < size; i++) {
            if (memcmp(data + i, patterns[p], plen) == 0) {
                module_count++;
                if (module_count <= 20) {
                    char ctx[200];
                    size_t ctx_len = (size - i < 199) ? (size - i) : 199;
                    memcpy(ctx, data + i, ctx_len);
                    ctx[ctx_len] = '\0';
                    for (size_t j = 0; j < ctx_len; j++) {
                        if ((unsigned char)ctx[j] < 32 || ctx[j] == '"') ctx[j] = ' ';
                    }
                    printf("MODULE_DEFINE offset=%zu: %.199s\n", i, ctx);
                }
            }
        }
    }
    printf("MODULE_DEFINE_TOTAL: %d\n", module_count);
}

int main(int argc, char **argv) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s <file> [--zlib] [--base64] [--module-map]\n", argv[0]);
        return 1;
    }

    for (int i = 2; i < argc; i++) {
        if (strcmp(argv[i], "--zlib") == 0) do_zlib = 1;
        if (strcmp(argv[i], "--base64") == 0) do_base64 = 1;
        if (strcmp(argv[i], "--module-map") == 0) do_modmap = 1;
    }
    if (!do_zlib && !do_base64 && !do_modmap) {
        do_zlib = 1; do_base64 = 1; do_modmap = 1;
    }

    FILE *f = fopen(argv[1], "rb");
    if (!f) { perror(argv[1]); return 1; }

    fseek(f, 0, SEEK_END);
    long fsize = ftell(f);
    fseek(f, 0, SEEK_SET);

    unsigned char *data = malloc(fsize);
    if (!data) { fprintf(stderr, "OOM: %ld\n", fsize); fclose(f); return 1; }
    fread(data, 1, fsize, f);
    fclose(f);

    fprintf(stderr, "[deep_scan] loaded %s (%ld bytes)\n", argv[1], fsize);

    if (do_base64) scan_base64_sourcemaps(data, fsize);
    if (do_modmap) scan_module_map(data, fsize);
    if (do_zlib) scan_zlib(data, fsize, argv[1]);

    free(data);
    fprintf(stderr, "[deep_scan] done.\n");
    return 0;
}
