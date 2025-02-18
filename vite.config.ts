import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './env',
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'), // ✅ Ensures React runs in production mode
  },
  build: {
    minify: 'esbuild', // ✅ Enables minification
    sourcemap: false,  // ✅ Disables sourcemaps for smaller builds
    rollupOptions: {
      output: {
        manualChunks: undefined, // ✅ Prevents unnecessary chunking
      },
      treeshake: true, // ✅ Forces dead code elimination
    },
    commonjsOptions: {
      transformMixedEsModules: true, // ✅ Ensures all modules are tree-shaken
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      treeShaking: true, // ✅ Ensures React gets optimized
    },
  },
  server: {
    host: true,
    port: 3001,
    strictPort: true,
    allowedHosts: ["illfindu.onrender.com"],
  },
});
