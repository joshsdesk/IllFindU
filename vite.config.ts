import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Ensures it binds to the correct interface
    port: 3001, // Render requires a defined port
    strictPort: true // Ensures it doesn't switch to a different port
  }
});
