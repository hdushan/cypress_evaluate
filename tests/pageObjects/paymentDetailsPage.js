const BasePage = require('./basePage')

class PaymentDetailsPage extends BasePage {
  constructor() {
    super()
    this.mainElement = 'section#select-payment-content'
    this.creditCardOption = 'label[data-feature-control-id="credit_card"]'
    this.termsAndConditions = 'input#t_and_c_check'
    this.paymentButton = 'input#order_submit'
  }

  selectCreditCardAndGoToNextStep() {
    cy.get(this.mainElement)
      .get(this.creditCardOption)
      .click()
    cy.get(this.mainElement)
      .get(this.termsAndConditions)
      .click({ force: true })
    cy.get(this.mainElement)
      .get(this.paymentButton)
      .click()
  }
}

module.exports = new PaymentDetailsPage()
