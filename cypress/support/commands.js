Cypress.Commands.add("getButtonByText", (text) => {
    cy.get('button').contains(text);
});

Cypress.Commands.add("checkEmployeeByName", (name) => {
    cy.contains('.jqx-tree-grid-title', name)
    .parent()
    .children('.jqx-tree-grid-checkbox')
    .first()
    .click();
});

Cypress.Commands.add("checkAllEmployees", () => {
    return cy.get("tbody")
    .find("tr")
    .find(".jqx-tree-grid-checkbox")
    .click({ multiple: true });
});

Cypress.Commands.add("expandAllTableEmployees", () => {
    cy.get('.jqx-tree-grid-collapse-button').each(($btn) => {
        cy.wrap($btn).click();
      });
});

