import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vuesetupExtend from "vite-plugin-vue-setup-extend";
// import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vuesetupExtend()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // "@": resolve(__dirname, "src"),
    },
    extensions: [".vue", ".ts", ".js"],
  },
  build: {
    lib: {
      entry: "./packages/index.ts",
      name: "vp-transfer",
    },
  },
});
