import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // saída padrão para o Vercel
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 5173, // padrão do Vite
  },
});
