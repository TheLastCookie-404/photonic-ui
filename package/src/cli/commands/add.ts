import { Command } from "commander";
import { download } from "@/scripts/download";

export const add = new Command().name("add").action(() => {
  download(
    "https://photonic-ui.netlify.app/ui/Test.vue",
    `./components/Test.vue`
  );
});
