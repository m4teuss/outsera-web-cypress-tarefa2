class ProductPage {
  selectProduct(nomeProduto) {
    cy.contains(nomeProduto).click()
  }
}
export default ProductPage;
