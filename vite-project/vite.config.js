import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // erlaubt externe Zugriffe (z. B. über ngrok)
    port: 5173    // optional – 5173 ist Standard
  }
})
