import employeesTable from '../selectors/employeesTable.sel'

describe('Employee Selection and City Display', () => {

  beforeEach(() => {
    cy.visit("/employees.html");
    cy.fixture('employees.json').as('employeesData');
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
    cy.get('@employeesData').then((employees) => {
      // get the first employee from employeess
      const selectedEmployee = employees[0];
      const employeeName = selectedEmployee.FirstName;
      const employeeCity = selectedEmployee.City;
      // click on the checkbox of the selected employee
      cy.get(employeesTable.employeeFirstName).contains(employeeName)
        .siblings(employeesTable.checkbox)
        .click();
      cy.getButtonByText('View selected data').click();
      cy.get(employeesTable.listContentBox).children().should('exist').and('have.length', 1);
      cy.get(employeesTable.listItem).first().contains(employeeCity);
    });
  });

  it.only("should show the city of origin for all selected employees", () => {
    cy.expandAllTableEmployees()
    cy.checkAllEmployees()
  });

  it("should not display any results when no employees are selected", () => {

  });

  it("should handle deselecting selected employees", () => {

  });
});
