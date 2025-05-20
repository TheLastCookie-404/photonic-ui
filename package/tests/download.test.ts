import { test } from "vitest";
import { download } from "@/scripts/download";

const projectRoot = process.cwd();
const sourceUrl = "https://photonic-ui.netlify.app/ui/Test.vue";
const directory = "./components/ui/";

test("Download test", () => {
  download(sourceUrl, directory);
});
