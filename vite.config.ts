import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './env',
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'), // ✅ Ensures React is in production mode
  },
  build: {
    minify: 'esbuild', // ✅ Enables proper minification
    sourcemap: false,  // ✅ Disables sourcemaps for smaller builds
  },
  server: {
    host: true,
    port: 3001,
    strictPort: true,
    allowedHosts: ["illfindu.onrender.com"],
  },
});
