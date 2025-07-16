import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server', // necesario para Netlify
  adapter: netlify(),
  integrations: [tailwind()],
});
