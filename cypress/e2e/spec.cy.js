import employeesTable from '../selectors/employeesTable.sel'

describe('Employee Selection and City Display', () => {

  const employeesFixture = "employees.json";

  beforeEach(() => {
    // Load the HTML page and provide aliases to the fixtures
    cy.visit("/employees.html", {
      onBeforeLoad(win) {
        win.employees = require(`../fixtures/${employeesFixture}`);
      },
    });
  });

  it("should not display any cities when no employees are selected", () => {

  });

  it("should allow checking and unchecking an employee's name", () => {

  });

  it("should allow checking and unchecking an employee's name", () => {

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
