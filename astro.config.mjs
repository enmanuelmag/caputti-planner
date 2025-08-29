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
      noExternal: [
        'webcoreui',
        'aos',
        '@mantine/core',
        '@mantine/hooks',
        '@mantine/carousel',
      ],
      external: ['node:buffer', 'node:fs', 'node:path'],
    },
    define: {
      global: 'globalThis',
    },
  },

  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
