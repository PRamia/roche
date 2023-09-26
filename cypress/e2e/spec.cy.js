import employeesTable from '../selectors/employeesTable.sel'

describe('Employee Selection and City Display', () => {

  const employeesFixture = "employees.json";

  beforeEach(() => {
    cy.visit("/employees.html", {
      onBeforeLoad(win) {
        win.employees = require(`../fixtures/${employeesFixture}`);
      },
    });
  });

  it("should not display any cities when no employees are selected", () => {
    cy.get(employeesTable.checkboxTick).should('not.exist');
    cy.getButtonByText('View selected data').click();
    cy.get(employeesTable.listContentBox).children().should('have.length', 0);  
  });

  it("should allow checking and unchecking an employee's name", () => {
    cy.checkEmployeeByName('Janet');
    cy.get(employeesTable.checkboxTick).should('to.exist').should('have.class', 'jqx-checkbox-check-checked');
    cy.checkEmployeeByName('Janet');
    cy.get(employeesTable.checkboxTick).should('not.exist');
  });

  it("should display the city of origin for a selected employee", () => {

  });

  it("should show the city of origin for all selected employees", () => {

  });

  it("should not display any results when no employees are selected", () => {

  });

  it("should handle deselecting selected employees", () => {

  });
});
