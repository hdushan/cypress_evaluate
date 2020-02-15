const BasePage = require('./basePage')

class CreditCardDetailsPage extends BasePage {
  constructor() {
    super()
    this.mainElement = 'form#new_credit_card'
    this.creditCardNumberField = 'input#credit_card_card_number'
    this.creditCardExpiryField = 'input#credit_card_expiry'
    this.creditCardCVVField = 'input#credit_card_card_security_code'
  }

  fillCreditCardDetails(card) {
    this.fillCreditCardNumber(card.number)
    this.fillCreditCardExpiry(card.expiryDate)
    this.fillCreditCardCVV(card.cvv)
  }

  fillCreditCardNumber(cardNumber) {
    cy.get(this.mainElement)
      .get(this.creditCardNumberField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.creditCardNumberField)
      .type(cardNumber)
      .should('have.value', CreditCardDetailsPage.formatCreditCardNumber(cardNumber))
  }

  fillCreditCardExpiry(expiryDate) {
    cy.get(this.mainElement)
      .get(this.creditCardExpiryField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.creditCardExpiryField)
      .type(expiryDate)
      .should('have.value', CreditCardDetailsPage.formatCreditCardExpiryDate(expiryDate))
  }

  fillCreditCardCVV(cvv) {
    cy.get(this.mainElement)
      .get(this.creditCardCVVField)
      .should('be.visible')
    cy.get(this.mainElement)
      .get(this.creditCardCVVField)
      .type(cvv)
      .should('have.value', cvv)
  }

  static formatCreditCardNumber(unformattedNumber) {
    const pureNumberArray = unformattedNumber.split('')
    const formattedNumberArray = []
    for (let i = 0; i < pureNumberArray.length; i += 1) {
      if (i !== 0 && i % 4 === 0) {
        formattedNumberArray.push(' ')
      }
      formattedNumberArray.push(pureNumberArray[i])
    }
    return formattedNumberArray.join('')
  }

  static formatCreditCardExpiryDate(unformattedExpiryDate) {
    return unformattedExpiryDate.replace(/\//gi, ' / ')
  }
}

module.exports = new CreditCardDetailsPage()
