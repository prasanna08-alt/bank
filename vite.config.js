import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Repo is "bank" → GitHub Pages project site serves from /bank/
  base: '/bank/',
})
