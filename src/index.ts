import { readFileSync } from "node:fs";

export type RunSummary = {
  filePath: string;
  lineCount: number;
  charCount: number;
};

export function runFile(filePath: string): RunSummary {
  const source = readFileSync(filePath, "utf8");

  return {
    filePath,
    lineCount: source.split(/\r?\n/).length,
    charCount: source.length,
  };
}
