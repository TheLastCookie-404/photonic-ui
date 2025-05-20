import { Command } from "commander";
import { download } from "@/scripts/download";

const projectRoot = process.cwd();
const sourceUrl = new URL("https://photonic-ui.netlify.app/ui/Test.vue");
const directory = `${projectRoot}/src/components/ui/`;

export const add = new Command().name("add").action(() => {
  download(sourceUrl, directory);
});
