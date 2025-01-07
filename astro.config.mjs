// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  vite: {
    ssr: {
      noExternal: ['webcoreui'],
      external: [
        'node:buffer',
        'node:fs',
        'node:path',
        'fs',
        'path',
        'events',
        // 'util',
        // 'url',
        // 'dns',
        //'net',
        'nodemailer',
      ],
    },
  },

  output: 'server',
  adapter: cloudflare(),
});
