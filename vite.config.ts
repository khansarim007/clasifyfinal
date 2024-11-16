import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'auth': ['@supabase/supabase-js', 'zustand'],
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});