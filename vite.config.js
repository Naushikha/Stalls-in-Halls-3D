import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";

export default {
  base: "", // https://stackoverflow.com/a/69746868
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "assets/*",
          dest: "assets",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "js/main.js"),
      name: "SiH3D",
      fileName: "SiH3D",
    },
  },
};
