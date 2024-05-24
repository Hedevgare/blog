import { defineConfig } from 'astro/config';

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
    base: isProd ? 'blog' : '',
});
