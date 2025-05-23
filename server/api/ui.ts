import fs from "fs";

function getComponentsData() {
  return fs.readdirSync("public/ui", { recursive: true });
}

export default defineEventHandler(() => {
  return {
    // hostname: event.node.req.headers.host,
    components: getComponentsData(),
  };
});
