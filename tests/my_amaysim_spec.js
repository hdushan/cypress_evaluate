const mobilePlanPage = require('./pageObjects/mobilePlanPage')
const personalDetailsPage = require('./pageObjects/personalDetailsPage')
const paymentDetailsPage = require('./pageObjects/paymentDetailsPage')
const creditCardDetailsPage = require('./pageObjects/creditCardDetailsPage')
const testData = require('./testData/testData')

describe('MyAmaysim Online Funnel', function() {
  it('Can signup successfully', function() {
    mobilePlanPage.visit()
    mobilePlanPage.selectNewNumberAndGoToNextStep()
    personalDetailsPage.fillNewCustomerDetailsAndGoToNextStep(testData.newUserDetails)
    paymentDetailsPage.selectCreditCardAndGoToNextStep()
    creditCardDetailsPage.fillCreditCardDetails(testData.verifiedCreditCard)
  })
})
