import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://walkeralfaro.com',
  integrations: [react(), sitemap(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })]
});