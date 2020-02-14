class BasePage {
  visit() {
    cy.visit(this.url);
  }
}
    
module.exports = BasePage;