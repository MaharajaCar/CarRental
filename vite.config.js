import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
  export default defineConfig({
    plugins: [react()],
    server: {
      allowedHosts: ['bf7b-2405-201-800b-4856-7977-e459-a94c-a0f6.ngrok-free.app']
    }
  })
