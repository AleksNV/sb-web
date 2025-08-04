import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    allowedHosts: [
        "c69ed1c1bc46.ngrok-free.app",
      "rnzjv-57-129-28-138.a.free.pinggy.link"
    ]
  }
});
