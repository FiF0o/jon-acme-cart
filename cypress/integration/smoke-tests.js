describe('Smoke tests', () => {
  // Will require our API to run - we are testing the API endpoints
  beforeEach(() => {
    cy.request('GET', 'http://localhost:4000/api/basketnormal')
      .its('body').as('normalrequest')
    cy.request('GET', 'http://localhost:4000/api/basketnormal2')
      .its('body').as('normalrequest2')
    cy.request('GET', 'http://localhost:4000/api/basketpromo')
      .its('body').as('basketpromo')
  })

  context('with Normal basket', () => {
    it('loads a normal basket containing the correct items', () => {
      cy.get('@normalrequest')
        .should(res => {
          expect(res.length).to.eq(4)
          const fruitTeaItems = res.filter(it => it.productCode === "FR1")
          const strawberryItems = res.filter(it => it.productCode === "SR1")
          const coffeeItems = res.filter(it => it.productCode === "CF1")
          expect(fruitTeaItems.length).to.eq(2)
          expect(strawberryItems.length).to.eq(1)
          expect(coffeeItems.length).to.eq(1)
      })
    })
  })

  context('with Normal2 basket', () => {
    it('loads a normal basket containing the correct items', () => {
      cy.get('@normalrequest2')
        .should(res => {
          expect(res.length).to.eq(2)
          const fruitTeaItems = res.filter(it => it.productCode === "FR1")
          const strawberryItems = res.filter(it => it.productCode === "SR1")
          const coffeeItems = res.filter(it => it.productCode === "CF1")
          expect(fruitTeaItems.length).to.eq(2)
          expect(strawberryItems.length).to.eq(0)
          expect(coffeeItems.length).to.eq(0)
      })
    })
  })

  context('with promo basket', () => {
    it('loads a normal basket containing the correct items', () => {
      cy.get('@basketpromo')
      .should(res => {
        expect(res.length).to.eq(4)
        const fruitTeaItems = res.filter(it => it.productCode === "FR1")
        const strawberryItems = res.filter(it => it.productCode === "SR1")
        const coffeeItems = res.filter(it => it.productCode === "CF1")
        expect(fruitTeaItems.length).to.eq(1)
        expect(strawberryItems.length).to.eq(3)
        expect(coffeeItems.length).to.eq(0)
      })
    })
  })
})