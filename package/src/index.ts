import { Command } from "commander";
import packageJson from "../package.json";
import { add } from "@/cli/commands/add";

const projectRoot = process.cwd();

async function main() {
  const program = new Command()
    .name("photonic-ui")
    .description("CLI to some JavaScript string utilities")
    .description(`Project root: ${projectRoot}`)
    .version(
      packageJson.version,
      "-v, --version",
      "display the version number"
    );

  program.addCommand(add);
  program.parse();

  console.log(projectRoot);
}

main();
