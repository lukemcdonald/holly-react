/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
  },
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@store": path.resolve(__dirname, "./src/store/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@MyTypes": path.resolve(__dirname, "./src/types/"),
      "@assets": path.resolve(__dirname, "./src/types/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@routes": path.resolve(__dirname, "./src/routes/"),
    },
  },
  plugins: [react()],
})
