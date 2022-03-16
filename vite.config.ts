import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  plugins: [react()],
  resolve: { // optional
    alias: [
      {
        find: '~/',
        replacement: path.join(__dirname, 'src/'),
      },
    ],
  },
})
