describe('Profile flow', () => {
  beforeEach(() => {
    cy.login('america@fc.com', 'America15!')
    cy.visit('http://localhost:5173/perfil')
  })

  it('should display profile form', () => {
    cy.get('form').should('be.visible')
    cy.get('#update-profile').should('be.visible')
    cy.get('#delete-profile').should('be.visible')
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="tel"]').should('be.visible')
  })

  it('should display logout button', () => {
    cy.get('#logout').should('be.visible')
    cy.get('#logout').click()
    cy.url().should('include', '/')
  })

})