const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    APP_URL: 'http://localhost:3000', // should go in .env file
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
