import request from "@/fetch";

request("https://photonic-ui.netlify.app/ui/Test.vue", "./components/Test.vue");

// export function getRequest() {
//   request();
// }

export function sayHello() {
  console.log("Hello");
}
