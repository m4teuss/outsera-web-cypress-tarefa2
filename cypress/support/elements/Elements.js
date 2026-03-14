export class ElementsLogin {
  fieldEmail = () => {
    return "#email";
  };
  fieldPassword = () => {
    return "#password";
  };
  btnEnter = () => {
    return ".btn-submit";
  };
}

export class ElementsCart {
  btnAddToCart = () => {
    return ".add-cart > .border";
  };

  btnCar = () => {
    return ".bg-qa-clr";
  };

  qtdeProductElemnts = () => {
    return ".flex > .border";
  };
}

export class ElementsCheckout {
  btnCheckout = () => {
    return ".mt-6 > .bg-qa-clr";
  };

  fieldName = () => {
    return 'input[placeholder="Ex. John"]';
  };

  fieldLastName = () => {
    return 'input[placeholder="Ex. Doe"]';
  };

  fieldCode = () => {
    return 'input[type="text"][value="1207"]';
  };

  btnContinue = () => {
    return ".justify-between > .bg-qa-clr";
  };

  btnFinish = () => {
    return ".border-t > .bg-qa-clr";
  };
}
