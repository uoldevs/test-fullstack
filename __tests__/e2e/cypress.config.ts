import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {},
  },
});
