import LoginPage from "../pages/01_LoginPage";
const loginPage = new LoginPage();

// Login
Given("que eu acesso a tela de login do sistema", () => {
  loginPage.openWebSite();
});

When("efetuo login com {} e {}", (user, password) => {
  loginPage.login(user, password);
});

Then("devo ser redirecionado para tela principal", () => {
  cy.url().should("include", "https://practice.qabrains.com/ecommerce");
});


Then("devo visualizar a seguinte erro {}", (mensagemErroLogin) => {
  cy.get(".toaster").should("be.visible").and("contain", mensagemErroLogin);
});

Then("devo visualizar a seguinte erro {}", (mensagemErroLogin) => {
  cy.get(".toaster").should("be.visible").and("contain", mensagemErroLogin);
});

Then("devo visualizar o seguinte erro de campos vazios {}", (mensagemErroLogin) => {
  cy.get(".form-fields").should("be.visible").and("contain", mensagemErroLogin);
});


When("faço login com email {} e senha {}", (user, password) => {
  loginPage.login(user, password);
});



