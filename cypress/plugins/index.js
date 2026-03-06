const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  // Configura o preprocessador do Cucumber
  on('file:preprocessor', cucumber());

};