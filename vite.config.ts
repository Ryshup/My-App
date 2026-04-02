import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2015",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom")
          ) {
            return "vendor-react";
          }
          if (id.includes("node_modules/@mui")) {
            return "vendor-mui";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-animation";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "[name]-[hash].js",
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
