import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/widget-min-v1.0.3.js`,
        chunkFileNames: `assets/widget-min-v1.0.3.[ext]`,
        assetFileNames: `assets/widget-min-v1.0.3.[ext]`
      },
    },

  },
})
