const mobilePlanPage = require('./pageObjects/MobilePlanPage')

describe('My First Test', function() {
    it('Visits MyAmaysim', function() {
      mobilePlanPage.visit()
      mobilePlanPage.selectNewNumberAndGoToNextStep()
    })
})