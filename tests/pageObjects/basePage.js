class BasePage {
  visit() {
    cy.visit(this.url)
  }

  static names(prefix, randomString, emailDomain) {
    return {
      firstName: `${prefix}First${randomString}`,
      lastName: `${prefix}Last${randomString}`,
      email: `${prefix}.${randomString}@${emailDomain}`,
    }
  }

  static randomString() {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 6)
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

module.exports = BasePage
