import { ElementsLogin } from "../elements/Elements";
const loginElements = new ElementsLogin();

class loginPage {
  openWebSite() {
    cy.visit("/");
  }

  login(user, password) {
    const fieldEmail = loginElements.fieldEmail();
    const fieldPassword = loginElements.fieldPassword();
    const btnEnter = loginElements.btnEnter();

    cy.get(fieldEmail).clear();
    if (user !== "vazio") {
      cy.get(fieldEmail).type(user);
    }

    cy.get(fieldPassword).clear();
    if (password !== "vazio") {
      cy.get(fieldPassword).type(password);
    }

    cy.get(btnEnter).click();
  }
}

export default loginPage;
