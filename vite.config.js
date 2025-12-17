import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  // serve from repository root where `index.html` now lives
  root: '.',
  server: { port: 5173 },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
