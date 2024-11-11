describe('Correct Create Profile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cadastro')
  })

  it('should steps 1 and 2 works', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"]').type('America')
    cy.get('input[type="email"]').type('americafc@email.com')
    cy.get('input[type="tel"]').type('1234567')
    cy.get('button[type="submit"]').click()
    cy.get('input[type="password"]').type('America15!')
    cy.get('button[type="submit"]').should('be.visible')
  })
})