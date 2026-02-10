// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  // prefetch: {
  //   prefetchAll: true,
  //   defaultStrategy: 'viewport',
  // },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
    },
  },
  vite: {
    ssr: {
      noExternal: [
        'webcoreui',
        'aos',
        '@mantine/core',
        '@mantine/hooks',
        '@mantine/carousel',
      ],
      external: ['node:buffer', 'node:path'],
    },
    define: {
      global: 'globalThis',
    },
  },

  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: {
      enabled: true,
    },
  }),
});
