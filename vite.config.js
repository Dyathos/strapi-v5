import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'strapi.orientation-maroc.com',
      'localhost',
      '127.0.0.1',
      '0.0.0.0'
    ],
    host: '0.0.0.0',
    port: 1337
  }
})
