const BasePage = require('./basePage')

class PersonalDetailsPage extends BasePage {
  constructor() {
    super()
    this.mainElement = '#select-address-content'
    this.firstNameField = 'input#order_transaction_first_name'
    this.lastNameField = 'input#order_transaction_last_name'
    this.dobField = 'input#order_transaction_dob'
    this.contactNumberField = 'input#order_transaction_daytime_phone'
    this.emailField = 'input#order_transaction_email'
    this.passwordField = 'input#order_transaction_password'
    this.addressField = 'input#autocomplete-residential-address'
    this.addressDropdown = 'section#residential-suggestions'
    this.addressDropdownMatches = 'section#residential-suggestions ul.verification-list a'
    this.addressSelected = 'section#select-residence dl[data-item="verified-residential-address"]'
    this.nextButton = 'input#step-address'
  }

  fillNewCustomerDetailsAndGoToNextStep(userDetails) {
    cy.get(this.mainElement).should('exist')
    const randomizedUser = BasePage.names(userDetails.namePrefix, BasePage.randomString(), userDetails.emailDomain)
    this.fillNameFields(randomizedUser.firstName, randomizedUser.lastName)
    this.fillDOB(userDetails.dob)
    this.fillContactNumber(userDetails.contactNumber)
    this.fillEmail(randomizedUser.email)
    this.fillPassword(userDetails.password)
    this.fillAddress(userDetails.address)
    this.goToPaymentStep()
  }

  fillNameFields(firstName, lastName) {
    cy.get(this.mainElement)
      .get(this.firstNameField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.firstNameField)
      .type(firstName)
      .should('have.value', firstName)
    cy.get(this.mainElement)
      .get(this.lastNameField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.lastNameField)
      .type(lastName)
      .should('have.value', lastName)
  }

  fillDOB(dob) {
    cy.get(this.mainElement)
      .get(this.dobField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.dobField)
      .type(dob)
      .should('have.value', dob)
  }

  fillContactNumber(contactNumber) {
    cy.get(this.mainElement)
      .get(this.contactNumberField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.contactNumberField)
      .type(contactNumber)
      .should('have.value', contactNumber)
  }

  fillEmail(email) {
    cy.get(this.mainElement)
      .get(this.emailField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.emailField)
      .type(email)
      .should('have.value', email)
    cy.task('log', email)
  }

  fillPassword(password) {
    cy.get(this.mainElement)
      .get(this.passwordField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.passwordField)
      .type(password)
      .should('have.value', password)
  }

  fillAddress(address) {
    cy.get(this.mainElement)
      .get(this.addressField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.addressField)
      .type(address)
      .should('have.value', address)
    cy.get(this.mainElement)
      .get(this.addressDropdown)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.addressDropdown)
      .get(this.addressDropdownMatches)
      .contains(address, { matchCase: false })
      .then(addressMatch => {
        cy.wrap(addressMatch).contains(address)
        addressMatch.click()
        cy.get(this.addressSelected).contains(address)
      })
  }

  goToPaymentStep() {
    cy.get(this.mainElement)
      .get(this.nextButton)
      .click()
  }
}

module.exports = new PersonalDetailsPage()
