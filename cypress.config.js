const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.qabrains.com/ecommerce/login', // URL base projeto
    specPattern: '**/*.feature', // Padrão para encontrar arquivos .feature
    viewportWidth: 1920, // Largura da tela em pixels
    viewportHeight: 1080, // Altura da tela em pixels
    supportFile: false, // Desabilita o arquivo de suporte padrão (opcional)
    setupNodeEvents(on, config) {
      // Configura o preprocessador do Cucumber
      on('file:preprocessor', cucumber());

      // Retorne a configuração para que o Cypress a use
      return config;
    },
  },
});

