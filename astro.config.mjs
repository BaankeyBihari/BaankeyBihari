import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.baankeybihari.com',
    output: 'static',
    build: {
        assets: 'assets',
        inlineStylesheets: 'never' // Keep CSS external for easier debugging
    },
    vite: {
        build: {
            cssCodeSplit: false // Bundle CSS into single file
        }
    }
});
