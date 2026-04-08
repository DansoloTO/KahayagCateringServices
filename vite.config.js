import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/#home/', // Ensure slashes are at BOTH ends and use quotes
})
