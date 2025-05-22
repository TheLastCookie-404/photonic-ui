import { test } from "vitest";
import { download } from "@/scripts/download";

const sourceUrl: URL = new URL("https://photonic-ui.netlify.app/ui/Test.vue");
const targetDir = "./components/";

test("Download test", () => {
  download(sourceUrl, targetDir);
  // const regex = new RegExp("[a-zA-z]*\\.[a-z]{1,6}$");
  // console.log(sourceUrl.pathname.replace(regex, ""));
});
