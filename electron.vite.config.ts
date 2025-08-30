import { defineConfig } from "electron-vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  main: {
    build: {
      outDir: "dist-electron/main",
      rollupOptions: {
        input: resolve(__dirname, "electron/main.ts"),
      },
    },
  },
  preload: {
    build: {
      outDir: "dist-electron/preload",
      rollupOptions: {
        input: resolve(__dirname, "electron/preload.ts"),
      },
    },
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
    plugins: [react()],
  },
});
