// import { download } from "@/scripts/fetch";
// import { rl } from "@/cli/cli";
import { Command } from "commander";
import packageJson from "../package.json";
import { add } from "@/cli/commands/add";

// It`s work!!!
//
// download(
//   "https://photonic-ui.netlify.app/ui/Test.vue",
//   "./components/Test.vue"
// );

// rl.question(`What's your name?`, (name) => {
//   console.log(`Hi ${name}!`);
//   rl.close();
// });

// export function sayHello() {
//   console.log("Hello");
// }

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
