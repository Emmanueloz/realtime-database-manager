import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  main: {
    build: {
      outDir: "dist-electron/main",
      rollupOptions: {
        input: resolve(__dirname, "electron/main.ts"),
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    build: {
      outDir: "dist-electron/preload",
      rollupOptions: {
        input: resolve(__dirname, "electron/preload.ts"),
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    // tu index.html está en la raíz del repo
    root: resolve(__dirname, "."),
    base: "./",
    build: {
      outDir: "dist-electron/renderer",
      rollupOptions: {
        input: resolve(__dirname, "index.html"),
      },
    },
    plugins: [react(), tailwindcss()],
  },
});
