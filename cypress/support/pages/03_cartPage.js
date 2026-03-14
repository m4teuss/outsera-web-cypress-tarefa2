import { ElementsCart } from "../elements/Elements";
const cartElements = new ElementsCart();

class CartPage {
  clickBtnAddToCar() {
    const btnAddToCart = cartElements.btnAddToCart();
    cy.get(btnAddToCart).click();
  }

  goCart() {
    const btnCart = cartElements.btnCar();
    cy.get(btnCart).click();
  }

  checkProductQuantity(qtdProduct) {
    cy.contains("span", qtdProduct)
      .should("be.visible")
      .and("have.text", qtdProduct);
  }
}
export default CartPage;