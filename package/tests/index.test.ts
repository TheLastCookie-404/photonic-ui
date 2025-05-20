import { test } from "vitest";
import fs from "fs";
import path from "path";

const projectRoot = process.cwd();

test("Just test", () => {
  console.log(projectRoot);
});
