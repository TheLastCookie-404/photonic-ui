import { download } from "@/scripts/fetch";
import { rl } from "@/cli/cli";

// It`s work!!!
//
// download(
//   "https://photonic-ui.netlify.app/ui/Test.vue",
//   "./components/Test.vue"
// );

rl.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});

export function sayHello() {
  console.log("Hello");
}
