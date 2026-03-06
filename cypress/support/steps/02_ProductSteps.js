import LoginPage from "../pages/01_LoginPage";
const loginPage = new LoginPage();

import ProductPage from "../pages/02_ProductPage";
const productPage = new ProductPage();


Given("que estou na página de produtos", () => {
  loginPage.openWebSite();
  loginPage.login("test@qabrains.com", "Password123");
  cy.wait(3000); // espera 3 segundos
});

When("seleciono produto {}", (nomeProduto) => {
  productPage.selectProduct(nomeProduto);
});

Then("devo visualizar o nome do produto {}", (nomeProduto) => {
  cy.contains(nomeProduto).should("be.visible");
});

And("devo visualizar a descrição do produto {}", (descricaoProduto) => {
  cy.contains(descricaoProduto).should("be.visible");
});
