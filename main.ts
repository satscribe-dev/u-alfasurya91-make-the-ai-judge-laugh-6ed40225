import { mkdirSync, writeFileSync } from "node:fs";

// One office-life joke, one line, chosen by pairwise comparison
// from 8 candidates (see outbox for the bracket).
const ENTRY =
  "We moved the deadline up to motivate the team; now the team is motivated to update their résumés.";

// Gate, mirrored from RULES.txt: UTF-8 text, 1-200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
