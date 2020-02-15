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

  fillNewCustomerDetailsAndGoToNextStep() {
    cy.get(this.mainElement).should('exist')
    this.fillNameFields('TestF', 'TestL')
    this.fillDOB('01/01/1980')
    this.fillContactNumber('0404788547')
    this.fillEmail('aaabbbccc@mail.com')
    this.fillPassword('AWqasde321')
    this.fillAddress('Level 6 17-19 Bridge St, Sydney NSW 2000')
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
      .contains(address)
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
