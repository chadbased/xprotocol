import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [
        react({
            include: '**/*.tsx'
        }),
        svgr()
    ],
    build: {
        target: 'es2020',
        outDir: './build',
        chunkSizeWarningLimit: 100000000,
        cssCodeSplit: false
    },
    optimizeDeps: {
        exclude: ['js-big-decimal'],

        esbuildOptions: {
            target: 'es2020',
            define: {
                global: 'globalThis'
            }
        }
    },
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
        
    }
})
