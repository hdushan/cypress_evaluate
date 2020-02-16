const BasePage = require('./basePage')

class EnergyLandingPage extends BasePage {
  constructor() {
    super()
    this.url = '/energy'
    this.signUpButton = 'a.button--orange-cta'
    this.creditCardOption = 'label[data-feature-control-id="credit_card"]'
    this.termsAndConditions = 'input#t_and_c_check'
    this.paymentButton = 'input#order_submit'
  }

  seeEnergyPlans() {
    cy.get(this.signUpButton)
      .contains('sign up')
      .click()
  }
}

module.exports = new EnergyLandingPage()
