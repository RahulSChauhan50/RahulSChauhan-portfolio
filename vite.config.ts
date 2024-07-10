import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/RahulSChauhan-portfolio/",
  plugins: [react()],
  define: {
    "process.env": process.env,
    global: "window",
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
});
