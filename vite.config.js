import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
   theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite MX Guides"', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})