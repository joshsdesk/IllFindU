import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  envDir: './env',
  plugins: mode === 'production' ? [react()] : [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode), // ✅ Set the correct mode
  },
  server: {
    host: true,
    port: 3001,
    strictPort: true,
    allowedHosts: ["illfindu.onrender.com"],
  },
}));
