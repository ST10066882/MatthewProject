import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

// Simulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      // Update the path to point to the server/keys folder
      key: fs.readFileSync(path.resolve(__dirname, '../server/keys/privatekey.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '../server/keys/certificate.pem')),
    },
  },
  plugins: [react()],
});