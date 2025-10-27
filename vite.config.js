import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import singleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), singleSpa({
    type: 'root',
    entry: '/src/index.jsx'
  })],
  
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/, // Updated to include .jsx
    exclude: [],
  },
})