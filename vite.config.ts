import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    resolve: {
      alias: [{ find: "~", replacement: path.resolve(__dirname, "./app") }],
    },
    build: {
      sourcemap: true,
    },
    plugins: [react()],
  };
});
