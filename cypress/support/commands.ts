/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        login(email: string, password: string): Chainable<void>
    }
}

Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.visit('http://localhost:5173/')
        cy.get('input[type="email"]').type(email)
        cy.get('input[type="password"]').type(password)
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/home')
    })
})