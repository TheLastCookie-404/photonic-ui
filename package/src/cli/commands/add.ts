import { program } from "commander";

export const add = program.command("test").action(() => {
  console.log("Test command");
});
