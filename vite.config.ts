import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg', 'uniosunlogo.png'],
      manifest: {
        name: 'UniOsunInfo',
        short_name: 'UniOsunInfo',
        description: 'Your campus community, updated in real time.',
        theme_color: '#16a34a',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/uniosunlogo.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/uniosunlogo.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/uniosunlogo.png',
            sizes: '64x64',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});