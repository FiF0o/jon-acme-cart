import { sumAmount } from '../../src/rules/prices'
import { initialState } from '../../src/initialState';


const mockData = require('../../server/api/db.json');

describe('Case page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('CASE 1: NO DISCOUNT APPLIED', () => {

    it.only('can load a basket with the correct items in the page, check the correct number of items, that the total price remains the same as there is no discount applied', () => {
      const mockResponseBody = [...mockData.basketNormal]
      // Mock endpoint and its reponse
      cy.server()
      cy.route('GET', '/api/basketnormal',
        mockResponseBody
        ).as('normalBasket')

      cy.window().its('store').invoke('getState')
        .should('deep.equal', initialState)

      // check that the button exists making the API call exists
      cy.get('[dataattribute="normal"]')
        .should('be.visible')
        .focus()
        .click()

      // check API & XHR responses to be passed in the view
      cy.get('@normalBasket')
        .should(response => {
          expect(response.method).to.eq('GET')
          expect(response.status).to.eq(200)
          expect(response.url).to.contain("/api/basketnormal")
          // TODO - that will do it for now - until we can have a proper matching xhr - resp.body
          expect(response.response.body).not.to.be.null
          expect(response.response.body).not.to.be.undefined
        })

      // Test reducer has received the data from XHR
      cy.window().its('store').invoke('getState').its('basket')
        .should('deep.equal', mockResponseBody)

      // Test that the UI is rendered with the correct data from the API
      cy.get('[dataattribute="product-list"]')
        .should('be.visible')
        .find('div.mdc-card.demo-basic-with-header')
        .should($product => expect($product).to.have.length(mockData.basketNormal.length))

      const expectedPrice = sumAmount(mockResponseBody)
      const priceEl = 'h3 > b'
      // Check thah the price is rendered correctly
      cy.get(priceEl)
        .should('be.visible')
        .should($b => expect($b).to.contain(expectedPrice))

      // Clicking discount to proceed to future checkout
      cy.get('button.mdc-button.mdc-button--raised')
        .click()

      // TODO: we want to also check that the action has been dispached and that the reducer is receiving some data to be processed


      // Check that the price is correctly rendered after discount if applied.
      // In this case we don't have a price since no discount or price rule(s) is applied,
      // We only implemented the strawberry rule in the web app
      cy.get(priceEl)
        .should('be.visible')
        .should($b => expect($b).to.contain(expectedPrice))
    })
  })
})