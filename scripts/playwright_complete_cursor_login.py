#!/usr/bin/env python3

import argparse
import json
import os
import shutil
import subprocess
import tempfile
import time
from pathlib import Path

from playwright.sync_api import sync_playwright


DEFAULT_CHROME_EXECUTABLE = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DEFAULT_CHROME_USER_DATA_DIR = os.path.expanduser("~/Library/Application Support/Google/Chrome")


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--login-url", required=True)
    parser.add_argument("--output-path", required=True)
    parser.add_argument("--chrome-executable", default=DEFAULT_CHROME_EXECUTABLE)
    parser.add_argument("--chrome-user-data-dir", default=DEFAULT_CHROME_USER_DATA_DIR)
    parser.add_argument("--chrome-profile-directory", default="Default")
    parser.add_argument("--profile-copy-dir", default="/tmp/shopeecode-login-chrome-profile")
    parser.add_argument("--timeout-ms", type=int, default=90000)
    parser.add_argument("--headless", default="1")
    return parser.parse_args()


def rsync_copy(source_root: Path, profile_name: str, target_root: Path):
    if target_root.exists():
      shutil.rmtree(target_root)
    target_root.mkdir(parents=True, exist_ok=True)

    for root_file in ["Local State", "Last Version", "First Run"]:
        source = source_root / root_file
        if source.exists():
            shutil.copy2(source, target_root / root_file)

    source_profile = source_root / profile_name
    target_profile = target_root / profile_name
    if not source_profile.exists():
        raise FileNotFoundError(f"Chrome profile not found: {source_profile}")

    subprocess.run(
        [
            "rsync",
            "-a",
            "--delete",
            "--exclude=Cache/",
            "--exclude=Code Cache/",
            "--exclude=GPUCache/",
            "--exclude=GrShaderCache/",
            "--exclude=GraphiteDawnCache/",
            "--exclude=ShaderCache/",
            "--exclude=Service Worker/CacheStorage/",
            "--exclude=Service Worker/ScriptCache/",
            "--exclude=Safe Browsing/",
            "--exclude=Crashpad/",
            "--exclude=BrowserMetrics/",
            "--exclude=OptimizationHints/",
            f"{source_profile}/",
            str(target_profile),
        ],
        check=True,
    )


def maybe_click(page, labels):
    for label in labels:
        locator = page.get_by_role("button", name=label)
        if locator.count():
            locator.first.click(timeout=1000)
            return f"button:{label}"
        locator = page.get_by_role("link", name=label)
        if locator.count():
            locator.first.click(timeout=1000)
            return f"link:{label}"
    return None


def main():
    args = parse_args()
    started_at = time.time()
    source_root = Path(args.chrome_user_data_dir)
    copy_root = Path(args.profile_copy_dir)
    output_path = Path(args.output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    rsync_copy(source_root, args.chrome_profile_directory, copy_root)

    result = {
        "loginUrl": args.login_url,
        "chromeExecutable": args.chrome_executable,
        "chromeUserDataDir": str(source_root),
        "chromeProfileDirectory": args.chrome_profile_directory,
        "profileCopyDir": str(copy_root),
        "headless": args.headless == "1",
        "success": False,
        "clickedActions": [],
        "visitedUrls": [],
        "finalUrl": None,
        "title": None,
        "bodySnippet": None,
        "error": None,
        "durationMs": None,
    }

    try:
        with sync_playwright() as playwright:
            context = playwright.chromium.launch_persistent_context(
                str(copy_root),
                executable_path=args.chrome_executable,
                headless=args.headless == "1",
                args=[
                    f"--profile-directory={args.chrome_profile_directory}",
                    "--disable-background-networking",
                    "--disable-default-apps",
                    "--disable-sync",
                    "--no-first-run",
                    "--no-default-browser-check",
                ],
            )

            page = context.pages[0] if context.pages else context.new_page()
            page.goto(args.login_url, wait_until="domcontentloaded", timeout=30000)

            deadline = time.time() + (args.timeout_ms / 1000)
            while time.time() < deadline:
                result["visitedUrls"].append(page.url)
                clicked = maybe_click(page, ["Open Cursor", "Continue", "Authorize", "Accept", "Open"])
                if clicked:
                    result["clickedActions"].append(clicked)
                    time.sleep(1)
                    continue

                current_url = page.url
                if "loginDeepControl" not in current_url:
                    result["success"] = True
                    break

                body_text = page.locator("body").inner_text(timeout=1000)
                if "Continue with Google" in body_text or "Sign in" in body_text or "Log in" in body_text:
                    result["bodySnippet"] = body_text[:1000]
                    break

                time.sleep(1)

            result["finalUrl"] = page.url
            result["title"] = page.title()
            if result["bodySnippet"] is None:
                try:
                    result["bodySnippet"] = page.locator("body").inner_text(timeout=1000)[:1000]
                except Exception:
                    result["bodySnippet"] = None

            context.close()
    except Exception as error:
        result["error"] = str(error)

    result["durationMs"] = int((time.time() - started_at) * 1000)
    output_path.write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")

    if not result["success"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
