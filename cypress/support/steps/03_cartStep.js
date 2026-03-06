import CartPage from "../pages/03_cartPage.js"
const cartPage = new CartPage();

import ProductPage from "../pages/02_ProductPage";
const productPage = new ProductPage();



When("adiciono o produto {} ao carrinho", (nomeProduto) => {
  productPage.selectProduct(nomeProduto);
  cartPage.clickBtnAddToCar()
});


And("acesso o carrinho", () => {
  cartPage.goCart()
});
  

Then("o carrinho deve conter {} produto", (qtdProduct) => {
  cartPage.checkProductQuantity(qtdProduct)
});


And("devo visualizar o produto {} no carrinho", (nomeProduto) => {
  cy.contains(nomeProduto).should("be.visible");
});