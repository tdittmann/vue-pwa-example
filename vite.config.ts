import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      filename: 'service-worker.js',
      manifest: {
        name: "Vue PWA Example",
        short_name: "VPE",
        icons: [
          {src: '/icons/icon-48x48.png', sizes: '48x48', type: 'image/png'},
          {src: '/icons/icon-72x72.png', sizes: '72x72', type: 'image/png'},
          {src: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png'},
          {src: '/icons/icon-128x128.png', sizes: '128x128', type: 'image/png'},
          {src: '/icons/icon-144x144.png', sizes: '144x144', type: 'image/png'},
          {src: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png'},
          {src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png'},
          {src: '/icons/icon-256x256.png', sizes: '256x256', type: 'image/png'},
          {src: '/icons/icon-384x384.png', sizes: '384x384', type: 'image/png'},
          {src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png'},
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
