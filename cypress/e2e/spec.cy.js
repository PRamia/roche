describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  });
  it('test 2', () => {
    cy.visit('https://example.cypress.io');
    cy.log('all fine');
  })
})