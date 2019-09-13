const mockData = require('../../server/api/db.json');

describe('Case page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should visit the page', () => {
    cy.server()
    cy.route('GET', '/api/basketnormal',
      [...mockData.basketNormal]
    )

    cy.get('[dataattribute="normal"]')
      .focus()
      .click()
    // Test API call

    // Test XHR response

    // Test reducer has received the data

    // Test that the UI is rendered
  })
})