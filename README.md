# PROJETO OUTSERA WEB

### Objetivo 
- Avaliar o comportamento das funcionalidades principais da aplicação de e-commerce, assegurando que o usuário consiga realizar uma compra completa

### Tecnologias Utilizadas
- JavaScript
- Node.js
- Cypress 14.0.2
- Cucumber (BDD)

### Pré requisito
- Computador com no mínimo 2 cores e 8GB de RAM
- [Nodejs](https://nodejs.org/) ou [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- IDE de desenvolvimento [(sugiro o VSCode)](https://code.visualstudio.com/)

### Instalação do Cypress

- Abrir terminal na pasta do projeto:

- Executar o comando `npm install --save-dev cypress`
  

### Executar os testes

- Executar os testes via headless `$ npx cypress run`

- Executar os testes via interface `$ npx cypress open`


### Estrutura de diretórios

TAREFA2/
├── cypress/
│   ├── cucumber-json/         
│   ├── fixtures/             
│   ├── integration/
│   │   └── gui/               
│   │       ├── 01_login.feature
│   │       ├── 02_product.feature
│   │       ├── 03_cart.feature
│   │       └── 04_checkout.feature
│   ├── plugins/
│   │   └── index.js           
│   ├── screenshots/          
│   └── support/
│       ├── elements/          
│       │   └── Elements.js
│       ├── pages/             
│       │   ├── 01_LoginPage.js
│       │   ├── 02_ProductPage.js
│       │   ├── 03_cartPage.js
│       │   └── 04_checkoutPage.js
│       ├── steps/             
│       │   ├── 01_LoginSteps.js
│       │   ├── 02_ProductSteps.js
│       │   ├── 03_cartStep.js
│       │   └── 04_checkoutStep.js
│       ├── commands.js        
│       └── index.js           
├── report.js                  
├── cypress.config.js          
├── package.json               
├── package-lock.json          
└── README.md                 


### Padrões Utilizados

- Os cenários foram escritos utilizando Gherkin com arquivos .feature.
- Page Object Model (POM)


### Relatórios de Teste
- Após a execução dos testes, são gerados arquivos de resultado em:
- `cypress/cucumber-json`
