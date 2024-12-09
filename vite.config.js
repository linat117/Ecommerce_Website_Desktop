import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Ecommerce_Website_Desktop/',
  plugins: [react()],
  eslint: {
    ignoreDuringBuilds : true,
  },

})
