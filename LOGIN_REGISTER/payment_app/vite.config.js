import { defineConfig } from 'vite'
import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '../keys/privatekey.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '../keys/certificate.pem')),
    },
  },
  plugins: [react()],
})
