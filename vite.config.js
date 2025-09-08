import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        {
            name: 'html-transform',
            transformIndexHtml(html) {
                return html.replace(/<title>.*<\/title>/, '<title>Workflow</title>');
            }
        }
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        // watchOptions: {
        //     poll: 1000, // Check for changes every second
        // },
        port: 3030,
        host: true,
    },
})
