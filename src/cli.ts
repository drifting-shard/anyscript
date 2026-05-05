import { resolve } from "node:path";
import { runFile } from "./index";

function main(argv: string[]): number {
  const inputPath = argv[2];

  if (!inputPath) {
    console.error("usage: anyscript <file.any>");
    return 1;
  }

  const resolvedPath = resolve(inputPath);
  const summary = runFile(resolvedPath);

  console.log("AnyScript week 1 scaffold");
  console.log(`file: ${summary.filePath}`);
  console.log(`lines: ${summary.lineCount}`);
  console.log(`chars: ${summary.charCount}`);
  console.log("next: lexer -> parser -> binder -> checker -> emitter");

  return 0;
}

process.exitCode = main(process.argv);
