import { defineConfig } from 'cypress';
import { cypressConfig }from '@axe-core/watcher';

export default defineConfig(
  cypressConfig({
    axe: {
      apiKey: process.env.AXE_WATCHER_API_TOKEN as string,
    },

    retries: 0,
    watchForFileChanges: false,
    chromeWebSecurity: true,
    numTestsKeptInMemory: 20,
    viewportWidth: 1920,
    viewportHeight: 1200,
    defaultCommandTimeout: 10000,

    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  })
);
