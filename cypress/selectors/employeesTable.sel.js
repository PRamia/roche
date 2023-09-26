module.exports = {
    checkbox: '.jqx-tree-grid-checkbox',
    checkEmployeeByName: (name) => {
        cy.contains('.jqx-tree-grid-title', name)
            .parent()
            .children('.jqx-tree-grid-checkbox')
            .first()
            .click();
    }
}