CC = cc
CFLAGS = -O2 -Wall -Wextra

all: sourcemap_hunt v8cache_parse deep_scan module_extract

sourcemap_hunt: sourcemap_hunt.c
	$(CC) $(CFLAGS) -o $@ $< -lz

v8cache_parse: v8cache_parse.c
	$(CC) $(CFLAGS) -o $@ $<

deep_scan: deep_scan.c
	$(CC) $(CFLAGS) -o $@ $< -lz

module_extract: module_extract.c
	$(CC) $(CFLAGS) -o $@ $<

clean:
	rm -f sourcemap_hunt v8cache_parse deep_scan module_extract

.PHONY: all clean
