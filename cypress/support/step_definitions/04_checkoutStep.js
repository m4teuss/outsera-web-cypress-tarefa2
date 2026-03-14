import {
  defineStep as And,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import CheckouPage from "../pages/04_checkoutPage";
const checkoutPage = new CheckouPage();

When("prossigo para o checkout", () => {
  checkoutPage.clickBtnCheckout();
});

And(
  "preencho os dados do cliente com nome {}, sobrenome {} e cep {}",
  (nome, sobrenome, cep) => {
    checkoutPage.fillInFields(nome, sobrenome, cep);
  },
);

Then("devo visualizar o valor total da compra {}", (valorCompra) => {
  cy.contains("p", "Item Total").should("contain", valorCompra);
});

And("devo visualizar o valor da taxa de entrega {}", (valorTaxaEntrega) => {
  cy.contains("p", "Tax").should("contain", valorTaxaEntrega);
});

And("finalizo a compra", () => {
  checkoutPage.clickBtnFinsh();
});

And(
  "devo visualizar a mensagem {} de compra realizada com sucesso",
  (mensagemSucesso) => {
    cy.get("h3").should("contain", mensagemSucesso);
  },
);
