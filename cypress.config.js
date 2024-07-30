const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    baseUrl: 'https://web.superfrete.com/#/calcular-correios',
    setupNodeEvents(on, config) {

    },
  },
});
