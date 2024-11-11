describe('Leads Flow', () => {
  beforeEach(() => {
    cy.login('america@fc.com', 'America15!')
    cy.visit('http://localhost:5173/leads')
  })

  it('should display leads form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="tel"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should display leads table title', () => {
    cy.get('#leads').should('be.visible')
  })

})