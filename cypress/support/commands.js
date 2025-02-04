// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const appUrl = `${Cypress.env('baseUrl')}:${Cypress.env('appPort')}`

Cypress.Commands.add('visitHome', () => {
  cy.visit(appUrl)
})

// default path to normalbasket.json
Cypress.Commands.add('normalbasket', (items = 'fixture:normalbasket') => {
  cy.server()
  cy.route('GET', '/api/basketnormal', items)
    .as('normalBasket')
})