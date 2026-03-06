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

Then("devo visualizar o valor total da compra", () => {
  cy.contains("p", "Item Total").should("contain", "$49.99");
});

And("devo visualizar o valor da taxa de entrega", () => {
  cy.contains("p", "Tax").should("contain", "$2.50");
});

And("finalizo a compra", () => {
  checkoutPage.clickBtnFinsh();
});

And("devo visualizar a mensagem {} de compra realizada com sucesso",
  (mensagemSucesso) => {
    cy.get("h3").should("contain", mensagemSucesso);
  },
);
