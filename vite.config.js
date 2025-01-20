import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'portfolio-project',
  root: './', // Ensure this points to the correct project root
  '@': '/src',
})
