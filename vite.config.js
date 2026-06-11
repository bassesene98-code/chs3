import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/chs-ecommerce/' to match your GitHub repository name
// Example: if your repo is github.com/votrecompte/mon-site → base: '/mon-site/'
export default defineConfig({
  plugins: [react()],
  base: '/chs-ecommerce/',   // ← modifier avec le nom de votre dépôt GitHub
})
