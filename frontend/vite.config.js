// vite.config.js
import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const API_URL = `${env.VITE_API_URL ?? "http://localhost:3000"}`;

  const PATH_API = env.VITE_PATH_API ?? '/api';
  const PATH_API_UPLOAD = env.VITE_PATH_API_UPLOAD ?? '/upload';

  return {
    server: {
      proxy: {
        [PATH_API]: {
          target: API_URL,
          changeOrigin: true,
        },
        [PATH_API_UPLOAD]: {
          target: API_URL,
          changeOrigin: true,
        },
      },
    },
    plugins: [react()],
  };
});
