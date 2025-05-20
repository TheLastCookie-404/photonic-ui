import { Command } from "commander";
import packageJson from "../package.json";
import { add } from "@/cli/commands/add";

async function main() {
  const program = new Command()
    .name("photonic-ui")
    .description("CLI to some JavaScript string utilities")
    .version(
      packageJson.version,
      "-v, --version",
      "display the version number"
    );

  program.addCommand(add);
  program.parse();
}

main();
