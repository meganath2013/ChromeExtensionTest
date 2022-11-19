describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://docs.google.com/document')

    cy.log('logging into gmail document')
    cy.get('input[type="email"]').type('meganathtest@gmail.com')
    cy.get('button').contains('Next').click()

    
    //cy.visit('chrome://extensions')
  })
})