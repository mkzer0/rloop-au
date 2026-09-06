// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.recursiveloop.com.au',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  // Old Squarespace URL for the home page.
  redirects: { '/home': '/' },
});
