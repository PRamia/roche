describe('List of Employees Table', () => {
  it('visit employees endpoint', () => {
    cy.visit('/employees.html');
    cy.log('all fine');
  });
});