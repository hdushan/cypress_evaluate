const energyLandingPage = require('./pageObjects/energyLandingPage')
const energyPlansPage = require('./pageObjects/energyPlansPage')
const testData = require('./testData/testData')

describe('Energy Online Funnel', function() {
  it('Can SQ and signup successfully', function() {
    energyLandingPage.visit()
    energyLandingPage.seeEnergyPlans()
    energyPlansPage.doSQ(testData.nswHome)
    // energyPlansPage.viewResults()
    // energyPlansPage.addRecommendedProductToCart()
  })
})
