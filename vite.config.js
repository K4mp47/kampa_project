import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kampa_project",
  build: {
    chunkSizeWarningLimit: 2500, // size in KB
  },
})
