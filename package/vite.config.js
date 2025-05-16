import { resolve } from "path";

export default {
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "photonic-ui",
      fileName: "photonic-ui",
    },
  },
};
