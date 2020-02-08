describe('My First Test', function() {
    it('Visits MyAmaysim', function() {
      cy.visit('https://www.amaysim.com.au/my-account/online/unlimited-medium')
      cy.get('#select-plan').get('div.order_transaction_porting').contains('new number').click()
      cy.get('#select-plan').get('div.order_transaction_porting').get('#selected-number').text().then(mobileNum => {
        cy.task('log', mobileNum)
        expect(mobileNum).to.match(/\d{4}\s\d{3}\s\d{3}/)
      });
      cy.get('#select-plan').get('input#step-plan').click();
    })
})