import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|webp|ico)$/i.test(assetInfo.name)) {
            return `img/[name]-[hash][extname]`;
          }
          if (/\.css$/i.test(assetInfo.name)) {
            return `css/[name]-[hash][extname]`;
          }
          return `[name]-[hash][extname]`;
        },
      },
    },
    // Generate source maps for debugging
    sourcemap: false,
    // Minify for production
    minify: 'esbuild',
    // Browser compatibility
    target: 'es2015',
  },
  server: {
    port: 3000,
    open: true,
  },
  // CSS
  css: {
    devSourcemap: true,
  },
  // Copy static assets
  publicDir: 'public',
});
