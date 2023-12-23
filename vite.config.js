import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const config = () => {
  const port = process.env.PORT || 3000

  return {
    base: './',
    plugins: [react()],
    server: {
      port
    },
    build: {
      outDir: 'dist'
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    },
    resolve: {
      alias: {
        src: '/src',
        services: '/src/services',
        hooks: '/src/util/hooks'
      }
    }
  }
}

export default defineConfig(config())
