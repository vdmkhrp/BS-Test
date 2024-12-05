import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";
import { dirname } from "path";
import handlebars from "vite-plugin-handlebars";
import { createHtmlPlugin } from "vite-plugin-html";

const __dirname = resolve();

const getHtmlInputs = () => {
  const files = fs
    .readdirSync(__dirname)
    .filter((file) => file.endsWith(".html"));
  return files.reduce((inputs, file) => {
    const key = file.replace(/\.html$/, "");
    inputs[key] = resolve(__dirname, file);
    return inputs;
  }, {});
};

export default defineConfig({
  root: __dirname,
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        ...getHtmlInputs(),
        main: resolve(__dirname, "src/js/script.js"),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        injectCss: "./assets/main.css",
        injectScript: "./assets/main.js",
      },
      transformIndexHtml: (html) => {
        return html
          .replace(/href="\/assets\//g, 'href="./assets/')
          .replace(/src="\/assets\//g, 'src="./assets/');
      },
    }),
  ],
});
