import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // Inline assets smaller than 8KB as base64 (avoids extra HTTP requests)
    assetsInlineLimit: 8192,
    // Enable CSS code splitting
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  // Optimize deps for faster dev server startup
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})