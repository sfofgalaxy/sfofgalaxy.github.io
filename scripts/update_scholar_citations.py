#!/usr/bin/env python3
"""Update the cached Google Scholar citation count when Scholar is reachable.

The site remains usable when Google Scholar blocks or times out: any fetch error
is reported and the existing value in _config.yml is left unchanged.
"""

from __future__ import annotations

import re
import sys
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONFIG = ROOT / "_config.yml"


def scholar_user_id(config_text: str) -> str:
    match = re.search(r"google_scholar:\s*\n(?:.*\n)*?\s*url:\s*[\"']?[^\n]*?[?&]user=([^\"'&\s]+)", config_text)
    if not match:
        raise ValueError("Google Scholar user ID was not found in _config.yml")
    return match.group(1)


def fetch_citations(user_id: str) -> int:
    from scholarly import scholarly

    author = scholarly.search_author_id(user_id)
    author = scholarly.fill(author, sections=["indices"])
    citations = author.get("citedby")
    if not isinstance(citations, int) or citations < 0:
        raise ValueError(f"Unexpected citation count returned by Scholar: {citations!r}")
    return citations


def update_config(config_text: str, citations: int, updated: str) -> str:
    updated_text, count = re.subn(
        r"(google_scholar:\s*\n(?:.*\n)*?\s*citations:)\s*\d+",
        rf"\1 {citations}",
        config_text,
        count=1,
    )
    if count != 1:
        raise ValueError("The Google Scholar citations field was not found in _config.yml")
    updated_text, count = re.subn(
        r"(google_scholar:\s*\n(?:.*\n)*?\s*citations_updated:)\s*[\"']?[^\n\"']+[\"']?",
        rf'\1 "{updated}"',
        updated_text,
        count=1,
    )
    if count != 1:
        raise ValueError("The Google Scholar update date field was not found in _config.yml")
    return updated_text


def main() -> int:
    config_text = CONFIG.read_text(encoding="utf-8")
    try:
        citations = fetch_citations(scholar_user_id(config_text))
        updated_text = update_config(
            config_text,
            citations,
            datetime.now(timezone.utc).strftime("%Y-%m"),
        )
    except Exception as exc:  # Scholar frequently blocks automated requests.
        print(f"Google Scholar fetch failed; keeping the previous value: {exc}", file=sys.stderr)
        return 0

    if updated_text == config_text:
        print(f"Google Scholar citations unchanged at {citations}.")
        return 0

    CONFIG.write_text(updated_text, encoding="utf-8")
    print(f"Updated Google Scholar citations to {citations}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
