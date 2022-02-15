describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      ':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a'
    ).click()
    cy.get('#query-btn').click()
    /* ==== End Cypress Studio ==== */
  })
})
