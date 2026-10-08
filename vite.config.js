import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function cleanUrlsPlugin() {
  return {
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url) {
          const [pathname, search] = req.url.split('?')
          const cleanPath = pathname.replace(/\/$/, '')
          if (
            cleanPath &&
            !cleanPath.includes('.') &&
            !cleanPath.startsWith('/@') &&
            !cleanPath.startsWith('/node_modules') &&
            !cleanPath.startsWith('/src')
          ) {
            const fileName = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath
            const targetFile = resolve(__dirname, `${fileName}.html`)
            if (fs.existsSync(targetFile)) {
              req.url = `/${fileName}.html${search ? `?${search}` : ''}`
            }
          }
        }
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url) {
          const [pathname, search] = req.url.split('?')
          const cleanPath = pathname.replace(/\/$/, '')
          if (
            cleanPath &&
            !cleanPath.includes('.') &&
            !cleanPath.startsWith('/@') &&
            !cleanPath.startsWith('/node_modules') &&
            !cleanPath.startsWith('/src')
          ) {
            const fileName = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath
            const targetFile = resolve(__dirname, 'dist', `${fileName}.html`)
            if (fs.existsSync(targetFile)) {
              req.url = `/${fileName}.html${search ? `?${search}` : ''}`
            }
          }
        }
        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), cleanUrlsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        features: resolve(__dirname, 'features.html'),
        about: resolve(__dirname, 'about.html'),
        careers: resolve(__dirname, 'careers.html'),
        blog: resolve(__dirname, 'blog.html'),
        'blog-details': resolve(__dirname, 'blog-details.html'),
        'how-it-works': resolve(__dirname, 'how-it-works.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        partners: resolve(__dirname, 'partners.html'),
        terms: resolve(__dirname, 'terms.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        seo: resolve(__dirname, 'seo.html')
      }
    }
  }
})
