/*
 * v8cache_parse.c - V8 code cache binary parser
 *
 * Parses Chrome/V8 code cache files (.../CachedData/.../chrome/js/*)
 * to extract:
 *   1. Header metadata (magic, version, source hash, flags)
 *   2. All embedded string constants (identifiers, URLs, keys)
 *   3. Function/scope boundary markers
 *   4. Bytecode offset table
 *
 * The V8 code cache format (Chrome 142 / V8 14.2):
 *   - 4 bytes: magic number (0xa7725c30)
 *   - 4 bytes: version hash
 *   - 4 bytes: source hash / flags
 *   - 4 bytes: flags (cpu features)
 *   - 64 bytes: hex-encoded checksum string
 *   - 4 bytes: num_reservation_sizes
 *   - ... reservation sizes
 *   - serialized payload (bytecode + metadata)
 *
 * Build: cc -O2 -o v8cache_parse v8cache_parse.c
 * Usage: ./v8cache_parse <cache_file> [--strings] [--header] [--all]
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <ctype.h>

#define MAX_STRINGS 500000

typedef struct {
    long offset;
    int length;
    char value[1024];
} ExtractedString;

static ExtractedString *strings_buf;
static int string_count = 0;
static int show_header = 0;
static int show_strings = 0;
static int show_all = 0;

static uint32_t read_u32(const unsigned char *p) {
    return (uint32_t)p[0] | ((uint32_t)p[1] << 8) |
           ((uint32_t)p[2] << 16) | ((uint32_t)p[3] << 24);
}

static int is_interesting_string(const char *s, int len) {
    if (len < 3) return 0;
    if (len > 500) return 0;

    int alpha = 0, digit = 0, punct = 0;
    for (int i = 0; i < len; i++) {
        if (isalpha((unsigned char)s[i])) alpha++;
        else if (isdigit((unsigned char)s[i])) digit++;
        else if (s[i] == '.' || s[i] == '_' || s[i] == '-' || s[i] == '/' ||
                 s[i] == ':' || s[i] == '@' || s[i] == '#') punct++;
    }
    float ratio = (float)(alpha + digit + punct) / len;
    return ratio > 0.8f;
}

/*
 * Extract strings using multiple strategies:
 * 1. Length-prefixed strings (V8 internalized strings)
 * 2. Null-terminated ASCII runs
 * 3. UTF-16LE encoded strings (common in V8)
 */
static void extract_strings(const unsigned char *data, size_t size) {
    /* Strategy 1: ASCII runs >= 4 chars */
    int run_start = -1;
    for (size_t i = 0; i < size; i++) {
        unsigned char c = data[i];
        int printable = (c >= 32 && c < 127);
        if (printable) {
            if (run_start < 0) run_start = (int)i;
        } else {
            if (run_start >= 0) {
                int len = (int)i - run_start;
                if (len >= 4 && string_count < MAX_STRINGS) {
                    char buf[1024];
                    if (len > 1023) len = 1023;
                    memcpy(buf, data + run_start, len);
                    buf[len] = '\0';
                    if (is_interesting_string(buf, len)) {
                        ExtractedString *es = &strings_buf[string_count++];
                        es->offset = run_start;
                        es->length = len;
                        memcpy(es->value, buf, len + 1);
                    }
                }
            }
            run_start = -1;
        }
    }

    /* Strategy 2: UTF-16LE strings (every other byte is 0x00 for ASCII) */
    for (size_t i = 0; i + 8 < size; i += 2) {
        if (data[i] >= 32 && data[i] < 127 && data[i+1] == 0x00 &&
            data[i+2] >= 32 && data[i+2] < 127 && data[i+3] == 0x00 &&
            data[i+4] >= 32 && data[i+4] < 127 && data[i+5] == 0x00 &&
            data[i+6] >= 32 && data[i+6] < 127 && data[i+7] == 0x00) {
            char buf[1024];
            int len = 0;
            size_t j = i;
            while (j + 1 < size && len < 1023 &&
                   data[j] >= 32 && data[j] < 127 && data[j+1] == 0x00) {
                buf[len++] = data[j];
                j += 2;
            }
            buf[len] = '\0';
            if (len >= 4 && is_interesting_string(buf, len) && string_count < MAX_STRINGS) {
                ExtractedString *es = &strings_buf[string_count++];
                es->offset = (long)i;
                es->length = len;
                memcpy(es->value, buf, len + 1);
            }
            i = j;
        }
    }
}

static void parse_header(const unsigned char *data, size_t size) {
    if (size < 96) {
        fprintf(stderr, "File too small for V8 code cache header\n");
        return;
    }

    uint32_t magic = read_u32(data);
    uint32_t version_hash = read_u32(data + 4);
    uint32_t source_hash = read_u32(data + 8);
    uint32_t flags = read_u32(data + 12);

    char checksum[65];
    memcpy(checksum, data + 16, 64);
    checksum[64] = '\0';

    int valid_checksum = 1;
    for (int i = 0; i < 64; i++) {
        if (!isxdigit((unsigned char)checksum[i])) { valid_checksum = 0; break; }
    }

    printf("{\n");
    printf("  \"header\": {\n");
    printf("    \"magic\": \"0x%08x\",\n", magic);
    printf("    \"magic_valid\": %s,\n", (magic == 0xa7725c30) ? "true" : "false");
    printf("    \"version_hash\": \"0x%08x\",\n", version_hash);
    printf("    \"source_hash\": \"0x%08x\",\n", source_hash);
    printf("    \"flags\": \"0x%08x\",\n", flags);
    if (valid_checksum) {
        printf("    \"checksum\": \"%s\",\n", checksum);
    }

    if (size >= 88) {
        uint32_t val80 = read_u32(data + 80);
        uint32_t val84 = read_u32(data + 84);
        uint32_t val88 = (size >= 92) ? read_u32(data + 88) : 0;
        printf("    \"post_checksum_u32_0\": %u,\n", val80);
        printf("    \"post_checksum_u32_1\": %u,\n", val84);
        printf("    \"post_checksum_u32_2\": %u,\n", val88);
    }

    printf("    \"file_size\": %zu\n", size);
    printf("  }");
}

static int cmp_strings(const void *a, const void *b) {
    return strcmp(((const ExtractedString *)a)->value, ((const ExtractedString *)b)->value);
}

static void dedup_and_print_strings(void) {
    qsort(strings_buf, string_count, sizeof(ExtractedString), cmp_strings);

    int unique = 0;
    for (int i = 0; i < string_count; i++) {
        if (i == 0 || strcmp(strings_buf[i].value, strings_buf[i-1].value) != 0) {
            if (i != unique) strings_buf[unique] = strings_buf[i];
            unique++;
        }
    }
    string_count = unique;

    printf(",\n  \"strings\": {\n");
    printf("    \"count\": %d,\n", string_count);
    printf("    \"items\": [\n");
    for (int i = 0; i < string_count; i++) {
        printf("      {\"offset\": %ld, \"len\": %d, \"value\": \"",
               strings_buf[i].offset, strings_buf[i].length);
        for (const char *p = strings_buf[i].value; *p; p++) {
            if (*p == '"') printf("\\\"");
            else if (*p == '\\') printf("\\\\");
            else putchar(*p);
        }
        printf("\"}%s\n", (i < string_count - 1) ? "," : "");
    }
    printf("    ]\n  }");
}

static void classify_strings(void) {
    int cursor_ns = 0, vscode_ns = 0, anysphere_ns = 0;
    int node_modules = 0, file_paths = 0, urls = 0;
    int identifiers = 0, css_classes = 0;

    for (int i = 0; i < string_count; i++) {
        const char *v = strings_buf[i].value;
        if (strstr(v, "cursor.")) cursor_ns++;
        if (strstr(v, "vscode") || strstr(v, "vs/")) vscode_ns++;
        if (strstr(v, "anysphere")) anysphere_ns++;
        if (strstr(v, "node_modules/")) node_modules++;
        if (strstr(v, "file://") || strstr(v, "http://") || strstr(v, "https://")) urls++;
        if (v[0] == '/' || strstr(v, ":\\")) file_paths++;
        if (strstr(v, "class=") || strstr(v, "className")) css_classes++;
        int is_ident = 1;
        for (const char *p = v; *p; p++) {
            if (!isalnum((unsigned char)*p) && *p != '_' && *p != '$') { is_ident = 0; break; }
        }
        if (is_ident && strlen(v) >= 4) identifiers++;
    }

    printf(",\n  \"classification\": {\n");
    printf("    \"cursor_namespace\": %d,\n", cursor_ns);
    printf("    \"vscode_namespace\": %d,\n", vscode_ns);
    printf("    \"anysphere_namespace\": %d,\n", anysphere_ns);
    printf("    \"node_modules_refs\": %d,\n", node_modules);
    printf("    \"urls\": %d,\n", urls);
    printf("    \"file_paths\": %d,\n", file_paths);
    printf("    \"css_classes\": %d,\n", css_classes);
    printf("    \"pure_identifiers\": %d\n", identifiers);
    printf("  }");
}

int main(int argc, char **argv) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s <cache_file> [--strings] [--header] [--all]\n", argv[0]);
        return 1;
    }

    for (int i = 2; i < argc; i++) {
        if (strcmp(argv[i], "--strings") == 0) show_strings = 1;
        if (strcmp(argv[i], "--header") == 0) show_header = 1;
        if (strcmp(argv[i], "--all") == 0) show_all = 1;
    }
    if (!show_strings && !show_header) show_all = 1;
    if (show_all) { show_strings = 1; show_header = 1; }

    FILE *f = fopen(argv[1], "rb");
    if (!f) { perror(argv[1]); return 1; }

    fseek(f, 0, SEEK_END);
    long fsize = ftell(f);
    fseek(f, 0, SEEK_SET);

    unsigned char *data = malloc(fsize);
    if (!data) { fprintf(stderr, "OOM for %ld bytes\n", fsize); fclose(f); return 1; }
    fread(data, 1, fsize, f);
    fclose(f);

    strings_buf = calloc(MAX_STRINGS, sizeof(ExtractedString));
    if (!strings_buf) { fprintf(stderr, "OOM for strings\n"); free(data); return 1; }

    fprintf(stderr, "[v8cache_parse] parsing %s (%ld bytes)...\n", argv[1], fsize);

    if (show_header) parse_header(data, fsize);
    if (show_strings) {
        extract_strings(data, fsize);
        dedup_and_print_strings();
        classify_strings();
    }

    printf("\n}\n");

    free(strings_buf);
    free(data);
    fprintf(stderr, "[v8cache_parse] done. %d unique strings extracted.\n", string_count);
    return 0;
}
