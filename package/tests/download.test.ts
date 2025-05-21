import { test } from "vitest";
import { download } from "@/scripts/download";

const projectRoot = process.cwd();
const sourceUrl: URL = new URL("https://photonic-ui.netlify.app/ui/Test.vue");
const targetDir = "./components/";

test("Download test", () => {
  download(sourceUrl, targetDir);
  // console.log(sourceUrl.pathname.match("[a-zA-z]*\\.[a-z]{1,6}$"));
});
