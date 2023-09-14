/* eslint-disable indent */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vkLoveConfessa/',
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
