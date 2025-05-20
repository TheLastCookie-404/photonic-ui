import { Command } from "commander";
import { download } from "@/scripts/download";

const projectRoot = process.cwd();

export const add = new Command().name("add").action(() => {
  download(
    "https://photonic-ui.netlify.app/ui/Test.vue",
    `${projectRoot}/src/components/Test.vue`
  );
});
