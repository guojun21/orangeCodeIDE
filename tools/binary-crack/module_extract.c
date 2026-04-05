/*
 * module_extract.c - Extract individual modules from the workbench bundle
 *
 * The bundle uses esbuild's format: Ae({"path/to/module.ts"(exports, module) { ... }})
 * This tool finds all Ae({ boundaries and extracts each module's code.
 *
 * Build: cc -O2 -o module_extract module_extract.c
 * Usage: ./module_extract <bundle.js> <output_dir> [--filter <pattern>]
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <errno.h>

static void mkdirp(const char *path) {
    char tmp[4096];
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

static char *sanitize_path(const char *module_path) {
    static char buf[4096];
    snprintf(buf, sizeof(buf), "%s", module_path);
    /* Replace ../ with _parent_/ for safe paths */
    char *p;
    while ((p = strstr(buf, "../")) != NULL) {
        memmove(p + 8, p + 3, strlen(p + 3) + 1);
        memcpy(p, "_parent_/", 8);
        /* Shift was 8 = len("_parent_") - but we replaced 3 chars "../" with 9 "_parent_/" */
    }
    return buf;
}

int main(int argc, char **argv) {
    if (argc < 3) {
        fprintf(stderr, "Usage: %s <bundle.js> <output_dir> [--filter <pattern>]\n", argv[0]);
        return 1;
    }

    const char *bundle_path = argv[1];
    const char *output_dir = argv[2];
    const char *filter = NULL;

    for (int i = 3; i < argc - 1; i++) {
        if (strcmp(argv[i], "--filter") == 0) filter = argv[i + 1];
    }

    FILE *f = fopen(bundle_path, "rb");
    if (!f) { perror(bundle_path); return 1; }

    fseek(f, 0, SEEK_END);
    long fsize = ftell(f);
    fseek(f, 0, SEEK_SET);

    char *data = malloc(fsize + 1);
    if (!data) { fprintf(stderr, "OOM: %ld\n", fsize); return 1; }
    fread(data, 1, fsize, f);
    data[fsize] = '\0';
    fclose(f);

    fprintf(stderr, "[module_extract] loaded %s (%ld bytes)\n", bundle_path, fsize);

    const char *marker = "Ae({\"";
    size_t mlen = strlen(marker);
    int total = 0, extracted = 0, skipped = 0;

    /* First pass: find all module boundaries */
    typedef struct { long offset; char path[1024]; } ModuleEntry;
    ModuleEntry *entries = calloc(5000, sizeof(ModuleEntry));
    int entry_count = 0;

    for (long i = 0; i + (long)mlen < fsize && entry_count < 5000; i++) {
        if (memcmp(data + i, marker, mlen) == 0) {
            long path_start = i + mlen;
            char *quote_end = strchr(data + path_start, '"');
            if (!quote_end) continue;
            long path_len = quote_end - (data + path_start);
            if (path_len <= 0 || path_len > 1000) continue;
            
            entries[entry_count].offset = i;
            memcpy(entries[entry_count].path, data + path_start, path_len);
            entries[entry_count].path[path_len] = '\0';
            entry_count++;
        }
    }

    fprintf(stderr, "[module_extract] found %d module boundaries\n", entry_count);

    /* Second pass: extract each module's code */
    mkdirp(output_dir);

    for (int m = 0; m < entry_count; m++) {
        total++;
        
        if (filter && !strstr(entries[m].path, filter)) {
            skipped++;
            continue;
        }

        long start = entries[m].offset;
        long end;
        if (m + 1 < entry_count) {
            end = entries[m + 1].offset;
        } else {
            end = fsize;
        }

        long code_len = end - start;
        if (code_len <= 0) continue;

        char outpath[4096];
        char *safe = sanitize_path(entries[m].path);
        snprintf(outpath, sizeof(outpath), "%s/%s", output_dir, safe);

        /* Create parent directory */
        char dirpath[4096];
        snprintf(dirpath, sizeof(dirpath), "%s", outpath);
        char *last_slash = strrchr(dirpath, '/');
        if (last_slash) { *last_slash = '\0'; mkdirp(dirpath); }

        FILE *out = fopen(outpath, "wb");
        if (!out) {
            fprintf(stderr, "  WARN: cannot write %s: %s\n", outpath, strerror(errno));
            continue;
        }

        /* Write a header comment */
        fprintf(out, "// Module: %s\n", entries[m].path);
        fprintf(out, "// Offset: %ld (bundle byte offset)\n", start);
        fprintf(out, "// Size: %ld bytes\n\n", code_len);
        fwrite(data + start, 1, code_len, out);
        fclose(out);
        extracted++;
    }

    printf("{\"total_modules\": %d, \"extracted\": %d, \"skipped\": %d, \"filter\": \"%s\"}\n",
           total, extracted, skipped, filter ? filter : "none");
    
    free(entries);
    free(data);
    fprintf(stderr, "[module_extract] done: %d extracted, %d skipped\n", extracted, skipped);
    return 0;
}
