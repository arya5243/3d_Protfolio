import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),tailwindcss()],
  base:'/3d_Protfolio',
  build: {
    target: 'esnext',
    minify: 'terser',
    chunkSizeWarningLimit: 1000
  },
})
