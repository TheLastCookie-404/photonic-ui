import { Command } from "commander";

export const add = new Command().name("test").action(() => {
  console.log("Test command");
});
