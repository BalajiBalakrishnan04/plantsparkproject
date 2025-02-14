import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import ViteImagemin from 'vite-plugin-imagemin';




export default defineConfig({
  plugins: [react(), tailwindcss(), 
    ViteImagemin({
      avif: {
        quality: 50, // Optional: Set image quality for AVIF
      },
    }),
  ],
 base:'/plantsparkproject'
});