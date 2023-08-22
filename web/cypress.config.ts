import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '5wewiz',
  e2e: {
    baseUrl: 'http://localhost:3000',
    video: true,
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
