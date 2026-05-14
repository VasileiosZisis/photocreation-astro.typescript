// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl =
  process.env.SITE_URL ??
  process.env.DEPLOY_PRIME_URL ??
  process.env.URL ??
  'https://www.studiophotocreationbyd.com';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
});
