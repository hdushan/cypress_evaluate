const mobilePlanPage = require('./pageObjects/mobilePlanPage')
const personalDetailsPage = require('./pageObjects/personalDetailsPage')
const paymentDetailsPage = require('./pageObjects/paymentDetailsPage')

describe('MyAmaysim Online Funnel', function() {
  it('Can signup successfully', function() {
    mobilePlanPage.visit()
    mobilePlanPage.selectNewNumberAndGoToNextStep()
    personalDetailsPage.fillNewCustomerDetailsAndGoToNextStep()
    paymentDetailsPage.selectCreditCardAndGoToNextStep()
  })
})
