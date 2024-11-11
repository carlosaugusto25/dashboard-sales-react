describe('Home flow', () => {
  beforeEach(() => {
    cy.login('america@fc.com', 'America15!')
    cy.visit('http://localhost:5173/home')
  })

  it('should display total sales', () => {
    cy.get('#total-sales').should('be.visible')
  })

  it('should display month goals', () => {
    cy.get('#month-goals').should('be.visible')
  })

  it('should display total leads', () => {
    cy.get('#total-leads').should('be.visible')
  })

  it('should display month sales chart', () => {
    cy.get('#month-sales-chart').should('be.visible')
  })

  it('should display total sales stars', () => {
    cy.get('#sales-stars').should('be.visible')
  })

  it('should display total newa', () => {
    cy.get('#news').should('be.visible')
  })

  it('should display total year sales chart', () => {
    cy.get('#year-sales-chart').should('be.visible')
  })

})