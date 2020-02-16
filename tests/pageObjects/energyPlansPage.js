const BasePage = require('./basePage')

class EnergyPlansPage extends BasePage {
  constructor() {
    super()
    this.url = '/energy'
    this.sqModal = '#sq-modal_modal'
    this.searchQuestionSection = 'fieldset#upload-or-search-question'
    this.searchAddressOptionButton = 'button#enter_your_address'
    this.addressSearchField = 'input#search-address-input'
    this.addressSearchButton = '#address-next-button'
    this.gasQuestionSection = 'fieldset#gas-question'
    this.gasQuestionNoButton = 'label[for="no_gas"]'
    this.gasQuestionYesButton = 'label[for="yes_gas"]'
    this.gasUsageQuestionSection = 'fieldset#gas-usage-question'
    this.gasUsageQuestionLowButton = 'label[for="low_gas"]'
    this.gasUsageQuestionMediumButton = 'label[for="medium_gas"]'
    this.gasUsageQuestionHighButton = 'label[for="high_gas"]'
    this.solarQuestionSection = 'fieldset#solar-question'
    this.solarQuestionNoButton = 'label[for="no_solar"]'
    this.solarQuestionYesButton = 'label[for="yes_solar"]'
    this.concessionsQuestionSection = 'fieldset#concessions-life-support-question'
    this.concessionsQuestionNoButton = 'label[for="no_concessions-life-support"]'
    this.concessionsQuestionYesButton = 'label[for="yes_concessions-life-support"]'
    this.resultsSection = 'fieldset#result'
    this.seePlansButton = 'button#see_plans'
  }

  doSQ(home) {
    this.searchAddress(home.address)
    this.answerGasQuestion(home.gas, home.gasUsage)
    this.answerSolarQuestion(home.solar)
    this.answerConcessionsQuestion(home.concessions)
    this.viewResultsAndSeePlans()
  }

  searchAddress(address) {
    cy.get(this.sqModal)
      .get(this.searchQuestionSection)
      .get(this.searchAddressOptionButton)
      .click()
    cy.get(this.sqModal)
      .get(this.searchQuestionSection)
      .get(this.addressSearchField)
      .should('be.visible')
    cy.get(this.sqModal)
      .get(this.searchQuestionSection)
      .get(this.addressSearchField)
      .type(address)
      .should('have.value', address)
    cy.get(this.sqModal)
      .get(this.searchQuestionSection)
      .get(this.addressSearchButton)
      .click()
  }

  answerGasQuestion(gas = false, gasUsage = null) {
    if (gas === true) {
      cy.get(this.sqModal)
        .get(this.gasQuestionSection)
        .get(this.gasQuestionYesButton)
        .click()
      switch (gasUsage.toLowerCase()) {
        case 'low':
          cy.get(this.sqModal)
            .get(this.gasUsageQuestionSection)
            .get(this.gasUsageQuestionLowButton)
            .click()
          break
        case 'medium':
          cy.get(this.sqModal)
            .get(this.gasUsageQuestionSection)
            .get(this.gasUsageQuestionMediumButton)
            .click()
          break
        default:
          cy.get(this.sqModal)
            .get(this.gasUsageQuestionSection)
            .get(this.gasUsageQuestionHighButton)
            .click()
      }
    } else {
      cy.get(this.sqModal)
        .get(this.gasQuestionSection)
        .get(this.gasQuestionNoButton)
        .click()
    }
  }

  answerSolarQuestion(solar) {
    if (solar === true) {
      cy.get(this.sqModal)
        .get(this.solarQuestionSection)
        .get(this.solarQuestionYesButton)
        .click()
    } else {
      cy.get(this.sqModal)
        .get(this.solarQuestionSection)
        .get(this.solarQuestionNoButton)
        .click()
    }
  }

  answerConcessionsQuestion(concessions) {
    if (concessions === true) {
      cy.get(this.sqModal)
        .get(this.concessionsQuestionSection)
        .get(this.concessionsQuestionYesButton)
        .click()
    } else {
      cy.get(this.sqModal)
        .get(this.concessionsQuestionSection)
        .get(this.concessionsQuestionNoButton)
        .click()
    }
  }

  viewResultsAndSeePlans() {
    cy.get(this.sqModal)
      .get(this.resultsSection)
      .contains('looking up')
      .should('be.visible')
    // cy.get(this.sqModal)
    //   .get(this.resultsSection)
    //   .get(this.seePlansButton, {timeout: 60000})
    //   .should('be.visible')
  }
}

module.exports = new EnergyPlansPage()
