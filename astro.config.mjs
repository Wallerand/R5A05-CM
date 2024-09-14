import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://wallerand.github.io',
    base: import.meta.env.PROD
        ? "/R5A05-CM"
        : ".",
    build: {
        assets: '_assets',
    },
    server: {
        host: true
    },
    devToolbar: {
        enabled: false
    },
    vite: {
        build: {
            chunkSizeWarningLimit: 1100 // RevealJS Highlight plugin is pretty heavy
        }
    }
});