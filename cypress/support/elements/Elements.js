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
    return ":nth-child(2) > .form-control";
  };

  fieldLastName = () => {
    return ":nth-child(3) > .form-control";
  };

  fieldCode = () => {
    return ":nth-child(4) > .form-control";
  };

  btnContinue = () => {
    return ".justify-between > .bg-qa-clr";
  };

  btnFinish = () => {
    return ".border-t > .bg-qa-clr";
  };
}
