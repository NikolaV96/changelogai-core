import {
  InvalidApiKeyError,
  MissingApiKeyError,
} from "./errors";
import type { FetchChangelogsResponse } from "./types";

function resolveApiKey(explicitKey?: string): string {
  if (explicitKey) return explicitKey;

  if (
    typeof process !== "undefined" &&
    typeof process.env !== "undefined" &&
    process.env.CHANGELOG_AI_API_SECRET
  ) {
    return process.env.CHANGELOG_AI_API_SECRET;
  }

  throw new MissingApiKeyError();
}

export async function fetchChangelogs(
  apiKey?: string
): Promise<FetchChangelogsResponse> {
  const resolvedKey = resolveApiKey(apiKey);

  const res = await fetch("https://changelogai.dev/api/changelogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ apiKey: resolvedKey }),
  });

  if (res.status === 401) {
    throw new InvalidApiKeyError();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch changelogs");
  }

  return res.json();
}
