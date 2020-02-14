const mobilePlanPage = require('./pageObjects/mobilePlanPage')

describe('My First Test', function() {
  it('Visits MyAmaysim', function() {
    mobilePlanPage.visit()
    mobilePlanPage.selectNewNumberAndGoToNextStep()
  })
})
