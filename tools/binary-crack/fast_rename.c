/*
 * fast_rename.c - Fast bulk symbol renaming for JS files
 *
 * Reads a mapping file (TSV: minified\toriginal) and a JS source file,
 * replaces all E(minified, "Original") confirmed names using direct
 * string matching. Much faster than regex-based Node.js approach.
 *
 * Build: cc -O2 -o fast_rename fast_rename.c
 * Usage: ./fast_rename <mapping.tsv> <input.js> <output.js>
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_MAPPINGS 20000
#define MAX_NAME 256

typedef struct {
    char minified[MAX_NAME];
    char original[MAX_NAME];
    int min_len;
    int orig_len;
    int count;
} Mapping;

static Mapping mappings[MAX_MAPPINGS];
static int mapping_count = 0;

static int is_word_char(char c) {
    return isalnum((unsigned char)c) || c == '_' || c == '$';
}

int main(int argc, char **argv) {
    if (argc < 4) {
        fprintf(stderr, "Usage: %s <mapping.tsv> <input.js> <output.js>\n", argv[0]);
        return 1;
    }

    FILE *mf = fopen(argv[1], "r");
    if (!mf) { perror(argv[1]); return 1; }

    char line[1024];
    while (fgets(line, sizeof(line), mf) && mapping_count < MAX_MAPPINGS) {
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
        m->count = 0;
    }
    fclose(mf);
    fprintf(stderr, "[fast_rename] loaded %d mappings\n", mapping_count);

    FILE *inf = fopen(argv[2], "rb");
    if (!inf) { perror(argv[2]); return 1; }
    fseek(inf, 0, SEEK_END);
    long fsize = ftell(inf);
    fseek(inf, 0, SEEK_SET);

    char *src = malloc(fsize + 1);
    fread(src, 1, fsize, inf);
    src[fsize] = '\0';
    fclose(inf);

    fprintf(stderr, "[fast_rename] input: %ld bytes\n", fsize);

    /* Build a quick lookup: for each short name, verify it exists via E(name, pattern */
    for (int i = 0; i < mapping_count; i++) {
        char pattern[512];
        snprintf(pattern, sizeof(pattern), "E(%s,", mappings[i].minified);
        if (!strstr(src, pattern)) {
            mappings[i].min_len = 0;
        }
    }

    int active = 0;
    for (int i = 0; i < mapping_count; i++) {
        if (mappings[i].min_len > 0) active++;
    }
    fprintf(stderr, "[fast_rename] active mappings (confirmed via E() pattern): %d\n", active);

    long out_cap = fsize * 2;
    char *out = malloc(out_cap);
    long oi = 0;

    for (long si = 0; si < fsize; ) {
        if (oi + 1000 > out_cap) {
            out_cap *= 2;
            out = realloc(out, out_cap);
        }

        if (!is_word_char(src[si])) {
            out[oi++] = src[si++];
            continue;
        }

        int wstart = (int)si;
        while (si < fsize && is_word_char(src[si])) si++;
        int wlen = (int)(si - wstart);

        int replaced = 0;
        for (int m = 0; m < mapping_count; m++) {
            if (mappings[m].min_len == 0) continue;
            if (wlen != mappings[m].min_len) continue;
            if (memcmp(src + wstart, mappings[m].minified, wlen) == 0) {
                memcpy(out + oi, mappings[m].original, mappings[m].orig_len);
                oi += mappings[m].orig_len;
                mappings[m].count++;
                replaced = 1;
                break;
            }
        }

        if (!replaced) {
            memcpy(out + oi, src + wstart, wlen);
            oi += wlen;
        }
    }

    FILE *of = fopen(argv[3], "wb");
    if (!of) { perror(argv[3]); return 1; }
    fwrite(out, 1, oi, of);
    fclose(of);

    int total_renames = 0;
    int renamed_symbols = 0;
    for (int i = 0; i < mapping_count; i++) {
        if (mappings[i].count > 0) {
            total_renames += mappings[i].count;
            renamed_symbols++;
        }
    }

    fprintf(stderr, "[fast_rename] output: %ld bytes\n", oi);
    fprintf(stderr, "[fast_rename] renamed: %d symbols, %d total replacements\n",
            renamed_symbols, total_renames);

    free(src);
    free(out);
    return 0;
}
