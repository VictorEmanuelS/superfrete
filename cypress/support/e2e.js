Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import './pageobject/gui_commands'

