import { ElementsCheckout } from "../elements/Elements";
const checkoutElements = new ElementsCheckout();


class CheckoutPage {
  clickBtnCheckout() {
    const btnCheckout = checkoutElements.btnCheckout();
    cy.get(btnCheckout).click();
  }

  fillInFields(nome, sobrenome, cep) {
    const fieldName = checkoutElements.fieldName();
    const fieldLastName = checkoutElements.fieldLastName();
    const fieldCode = checkoutElements.fieldCode();
    const btnContinue = checkoutElements.btnContinue();
    
    cy.get(fieldName).type(nome);
    cy.get(fieldLastName).type(sobrenome);
    cy.get(fieldCode).type(cep);
    cy.get(btnContinue).click()
  }

  clickBtnFinsh(){

    const btnFinish = checkoutElements.btnFinish();
    cy.get(btnFinish).click()
  }
}
export default CheckoutPage;