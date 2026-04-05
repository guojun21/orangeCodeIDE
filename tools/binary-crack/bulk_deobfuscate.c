/*
 * bulk_deobfuscate.c - C-native JS deobfuscation pipeline
 *
 * For each .js module file in a directory tree:
 *   1. Strip Ae({"module/path"(){...}}) wrapper
 *   2. Apply rename mapping (reuse fast_rename logic)
 *   3. Basic JS formatting (indent by braces, break on semicolons)
 *   4. Write to output directory preserving structure
 *
 * Build: cc -O2 -o bulk_deobfuscate bulk_deobfuscate.c
 * Usage: ./bulk_deobfuscate <mapping.tsv> <input_dir> <output_dir>
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <sys/stat.h>
#include <dirent.h>
#include <errno.h>

#define MAX_MAPPINGS 20000
#define MAX_NAME 256
#define MAX_PATH_LEN 4096

typedef struct {
    char minified[MAX_NAME];
    char original[MAX_NAME];
    int min_len;
    int orig_len;
} Mapping;

static Mapping mappings[MAX_MAPPINGS];
static int mapping_count = 0;
static int total_files = 0;
static int processed_files = 0;
static int formatted_files = 0;
static int renamed_files = 0;
static long total_renames = 0;

static int is_word_char(char c) {
    return isalnum((unsigned char)c) || c == '_' || c == '$';
}

static void mkdirp(const char *path) {
    char tmp[MAX_PATH_LEN];
    snprintf(tmp, sizeof(tmp), "%s", path);
    for (char *p = tmp + 1; *p; p++) {
        if (*p == '/') {
            *p = '\0';
            mkdir(tmp, 0755);
            *p = '/';
        }
    }
    mkdir(tmp, 0755);
}

static void load_mappings(const char *tsv_path) {
    FILE *f = fopen(tsv_path, "r");
    if (!f) { perror(tsv_path); return; }
    char line[1024];
    while (fgets(line, sizeof(line), f) && mapping_count < MAX_MAPPINGS) {
        char *tab = strchr(line, '\t');
        if (!tab) continue;
        *tab = '\0';
        char *orig = tab + 1;
        char *nl = strchr(orig, '\n');
        if (nl) *nl = '\0';
        int mlen = (int)strlen(line);
        int olen = (int)strlen(orig);
        if (mlen < 2 || mlen > 5 || olen < 3) continue;
        Mapping *m = &mappings[mapping_count++];
        strncpy(m->minified, line, MAX_NAME - 1);
        strncpy(m->original, orig, MAX_NAME - 1);
        m->min_len = mlen;
        m->orig_len = olen;
    }
    fclose(f);
}

/* Strip Ae({"path"(){"use strict"; ... }}) wrapper, return inner code */
static char *strip_wrapper(const char *src, long len, long *out_len) {
    const char *p = src;
    /* Skip header comments */
    while (p < src + len && *p == '/' && *(p+1) == '/') {
        while (p < src + len && *p != '\n') p++;
        if (p < src + len) p++;
    }
    while (p < src + len && (*p == '\n' || *p == '\r')) p++;

    /* Look for Ae({"....."(){"use strict"; */
    if (strncmp(p, "Ae({\"", 5) == 0) {
        const char *q = strchr(p + 5, '"');
        if (q) {
            /* Find (){" or (){"use strict"; */
            const char *body = strstr(q, "(){\"use strict\";");
            if (body) {
                body += 16; /* skip (){"use strict"; */
                long body_len = (src + len) - body;
                /* Strip trailing }}) or }}), */
                while (body_len > 0 && (body[body_len-1] == '\n' || body[body_len-1] == '\r'))
                    body_len--;
                if (body_len >= 3 && body[body_len-3] == '}' && body[body_len-2] == '}' && body[body_len-1] == ')')
                    body_len -= 3;
                if (body_len >= 4 && body[body_len-4] == '}' && body[body_len-3] == '}' && body[body_len-2] == ')' && body[body_len-1] == ',')
                    body_len -= 4;

                char *result = malloc(body_len + 1);
                memcpy(result, body, body_len);
                result[body_len] = '\0';
                *out_len = body_len;
                return result;
            }
        }
    }

    /* No wrapper found, return copy */
    long skip = p - src;
    long rlen = len - skip;
    char *result = malloc(rlen + 1);
    memcpy(result, p, rlen);
    result[rlen] = '\0';
    *out_len = rlen;
    return result;
}

/* Per-module E() pattern check: only enable mappings whose E(minified, is present */
static int active_mask[MAX_MAPPINGS];

static int build_active_mask(const char *src, long len) {
    int active = 0;
    for (int i = 0; i < mapping_count; i++) {
        active_mask[i] = 0;
        char pattern[512];
        snprintf(pattern, sizeof(pattern), "E(%s,", mappings[i].minified);
        if (strstr(src, pattern)) {
            active_mask[i] = 1;
            active++;
        }
    }
    return active;
}

/* Apply rename mappings (only those confirmed by E() in this module) */
static char *apply_renames(const char *src, long len, long *out_len, int *rename_count) {
    long cap = len * 2 + 1024;
    char *out = malloc(cap);
    long oi = 0;
    *rename_count = 0;

    for (long si = 0; si < len; ) {
        if (oi + 512 > cap) {
            cap *= 2;
            out = realloc(out, cap);
        }
        if (!is_word_char(src[si])) {
            out[oi++] = src[si++];
            continue;
        }
        int ws = (int)si;
        while (si < len && is_word_char(src[si])) si++;
        int wlen = (int)(si - ws);

        int replaced = 0;
        for (int m = 0; m < mapping_count; m++) {
            if (!active_mask[m]) continue;
            if (mappings[m].min_len != wlen) continue;
            if (memcmp(src + ws, mappings[m].minified, wlen) == 0) {
                memcpy(out + oi, mappings[m].original, mappings[m].orig_len);
                oi += mappings[m].orig_len;
                (*rename_count)++;
                replaced = 1;
                break;
            }
        }
        if (!replaced) {
            memcpy(out + oi, src + ws, wlen);
            oi += wlen;
        }
    }
    out[oi] = '\0';
    *out_len = oi;
    return out;
}

/* Basic JS formatting: indent by braces, break on ; and { and } */
static char *format_js(const char *src, long len, long *out_len) {
    long cap = len * 3 + 4096;
    char *out = malloc(cap);
    long oi = 0;
    int indent = 0;
    int in_string = 0;
    char string_char = 0;
    int line_start = 1;
    int in_template = 0;
    int template_depth = 0;

    #define EMIT(c) do { if (oi + 128 > cap) { cap *= 2; out = realloc(out, cap); } out[oi++] = (c); } while(0)
    #define NEWLINE() do { EMIT('\n'); for(int _i=0;_i<indent;_i++) { EMIT(' '); EMIT(' '); } line_start=1; } while(0)

    for (long i = 0; i < len; i++) {
        char c = src[i];
        char next = (i + 1 < len) ? src[i+1] : 0;

        /* Track strings */
        if (in_string) {
            EMIT(c);
            if (c == '\\') { if (i+1 < len) { EMIT(src[++i]); } continue; }
            if (c == string_char) {
                if (string_char == '`') in_template = 0;
                in_string = 0;
            }
            continue;
        }

        if (c == '"' || c == '\'' || c == '`') {
            in_string = 1;
            string_char = c;
            if (c == '`') in_template = 1;
            EMIT(c);
            continue;
        }

        /* Format by structure */
        if (c == '{') {
            EMIT(c);
            indent++;
            NEWLINE();
        } else if (c == '}') {
            indent--;
            if (indent < 0) indent = 0;
            NEWLINE();
            EMIT(c);
            if (next == ',' || next == ';' || next == ')') {
                /* don't newline, let the next char handle it */
            } else if (next != '}' && next != '\0') {
                NEWLINE();
            }
        } else if (c == ';') {
            EMIT(c);
            if (next != '}' && next != '\0' && next != '\n') {
                NEWLINE();
            }
        } else if (c == ',' && indent <= 2 && next != ' ' && next != '\n') {
            EMIT(c);
            EMIT(' ');
        } else {
            EMIT(c);
        }
        line_start = 0;
    }

    out[oi] = '\0';
    *out_len = oi;
    return out;
    #undef EMIT
    #undef NEWLINE
}

static void process_file(const char *input_path, const char *output_path,
                         const char *rel_path) {
    FILE *f = fopen(input_path, "rb");
    if (!f) return;

    fseek(f, 0, SEEK_END);
    long fsize = ftell(f);
    fseek(f, 0, SEEK_SET);

    if (fsize < 100) { fclose(f); return; }

    char *raw = malloc(fsize + 1);
    fread(raw, 1, fsize, f);
    raw[fsize] = '\0';
    fclose(f);

    total_files++;

    /* Preserve header */
    char header[512] = "";
    const char *body_start = raw;
    if (strncmp(raw, "// Module:", 10) == 0) {
        const char *hend = strstr(raw, "\n\n");
        if (hend && (hend - raw) < 400) {
            int hlen = (int)(hend - raw + 2);
            memcpy(header, raw, hlen);
            header[hlen] = '\0';
            body_start = raw + hlen;
        }
    }

    long body_len = fsize - (body_start - raw);

    /* 1. Strip wrapper */
    long stripped_len;
    char *stripped = strip_wrapper(body_start, body_len, &stripped_len);

    /* 2. Build per-module active mask, then rename */
    int active = build_active_mask(stripped, stripped_len);
    long renamed_len;
    int rename_count = 0;
    char *rn = apply_renames(stripped, stripped_len, &renamed_len, &rename_count);
    free(stripped);
    if (rename_count > 0) { renamed_files++; total_renames += rename_count; }

    /* 3. Format */
    long fmt_len;
    char *formatted = format_js(rn, renamed_len, &fmt_len);
    free(rn);

    long lines = 1;
    for (long i = 0; i < fmt_len; i++) if (formatted[i] == '\n') lines++;

    if (lines > 5) formatted_files++;

    /* Write output */
    char outdir[MAX_PATH_LEN];
    snprintf(outdir, sizeof(outdir), "%s", output_path);
    char *last_slash = strrchr(outdir, '/');
    if (last_slash) { *last_slash = '\0'; mkdirp(outdir); }

    FILE *of = fopen(output_path, "wb");
    if (of) {
        if (header[0]) fwrite(header, 1, strlen(header), of);
        fwrite(formatted, 1, fmt_len, of);
        fclose(of);
        processed_files++;
    }

    free(formatted);
    free(raw);

    if (fsize > 10000) {
        fprintf(stderr, "  %s: %ld -> %ld bytes, %ld lines, %d renames\n",
                rel_path, fsize, fmt_len, lines, rename_count);
    }
}

static void walk_and_process(const char *input_base, const char *output_base,
                             const char *rel_prefix) {
    char full_input[MAX_PATH_LEN];
    snprintf(full_input, sizeof(full_input), "%s/%s", input_base, rel_prefix);

    DIR *d = opendir(full_input);
    if (!d) return;

    struct dirent *ent;
    while ((ent = readdir(d)) != NULL) {
        if (ent->d_name[0] == '.') continue;

        char rel[MAX_PATH_LEN];
        if (rel_prefix[0]) snprintf(rel, sizeof(rel), "%s/%s", rel_prefix, ent->d_name);
        else snprintf(rel, sizeof(rel), "%s", ent->d_name);

        char inp[MAX_PATH_LEN], outp[MAX_PATH_LEN];
        snprintf(inp, sizeof(inp), "%s/%s", input_base, rel);
        snprintf(outp, sizeof(outp), "%s/%s", output_base, rel);

        struct stat st;
        if (stat(inp, &st) != 0) continue;

        if (S_ISDIR(st.st_mode)) {
            walk_and_process(input_base, output_base, rel);
        } else if (S_ISREG(st.st_mode)) {
            int nlen = strlen(ent->d_name);
            if (nlen > 3 && strcmp(ent->d_name + nlen - 3, ".js") == 0) {
                process_file(inp, outp, rel);
            } else if (nlen > 4 && strcmp(ent->d_name + nlen - 4, ".css") == 0) {
                /* Copy CSS files as-is */
                mkdirp(outp);
                char *last = strrchr(outp, '/');
                if (last) { *last = '\0'; mkdirp(outp); *last = '/'; }
                FILE *fi = fopen(inp, "rb");
                FILE *fo = fopen(outp, "wb");
                if (fi && fo) {
                    char buf[8192];
                    size_t n;
                    while ((n = fread(buf, 1, sizeof(buf), fi)) > 0) fwrite(buf, 1, n, fo);
                }
                if (fi) fclose(fi);
                if (fo) fclose(fo);
            }
        }
    }
    closedir(d);
}

int main(int argc, char **argv) {
    if (argc < 4) {
        fprintf(stderr, "Usage: %s <mapping.tsv> <input_dir> <output_dir>\n", argv[0]);
        return 1;
    }

    load_mappings(argv[1]);
    fprintf(stderr, "[bulk_deobfuscate] %d mappings loaded\n", mapping_count);

    mkdirp(argv[3]);
    walk_and_process(argv[2], argv[3], "");

    fprintf(stderr, "\n[bulk_deobfuscate] Results:\n");
    fprintf(stderr, "  Total files: %d\n", total_files);
    fprintf(stderr, "  Processed: %d\n", processed_files);
    fprintf(stderr, "  Formatted (>5 lines): %d\n", formatted_files);
    fprintf(stderr, "  Renamed: %d (%ld total renames)\n", renamed_files, total_renames);

    printf("{\"total\": %d, \"processed\": %d, \"formatted\": %d, \"renamed\": %d, \"totalRenames\": %ld}\n",
           total_files, processed_files, formatted_files, renamed_files, total_renames);

    return 0;
}
