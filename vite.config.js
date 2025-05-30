import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr';
import path from 'path';
// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Weather-de-cen',
        short_name: 'Weather',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0032A0',
        icons:[],
      },
    }),
  ],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true,       // ← IP 접속 허용 (0.0.0.0으로 바인딩)
    port: 5173,        // ← 기본 포트 (원하면 변경 가능)
  },

})
