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
