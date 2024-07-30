export const elements = {
    acessarUrl: '',
    limpacookie: '',
    limpalocal: '',
    pacote: 'Caixa / Pacote',
    gramas: 'Até 300g',
    ziporigin: '#originPostcode',
    formato: '[id="object_format"]',
    peso: '[id="weight"]',
    altura: '[id="packageHeight"]',
    largura: '[id="packageWidth"]',
    comprimento: '[id="packageDepth"]',
    zipdestino: '#destinationPostcode',
    fretecomdesconto: '[data-cy="calculator-submit"]',
    pac: '[id="calculator-package-type-PAC-container"]',
    sedex: '[id="calculator-SEDEX-valueColumn-div"]',
    minienvio: '[id="calculator-package-type-Mini Envios-container"]',
    aguarde: 10000,
    cepdedestinoobrigatorio: 'CEP de destino é obrigatório',
    mensagemmine: 'Nesta modalidade não há detalhamento de rastreio. Informaremos o momento da postagem e da entrega do objeto. Caso as medidas máximas sejam ultrapassadas, poderá ser alterada a modalidade de envio e o valor do seu frete, certifique-se de que a embalagem possui medidas iguais ou inferiores a 4cm x 16cm x 24cm e até 300g.',
    preçoadicional: 'Preço sem adicionais',
    ceporiginal: 'CEP de origem é obrigatório',
    erroaltura: 'Altura mínima 0.4 cm',
    errolargura: 'Largura mínima 8 cm',
    errocomprimento: 'Comprimento mínimo 13 cm'


}

// Cypress.Commands.add('clearcookies', () => {
//     cy.clearCookies();
//     cy.clearLocalStorage();

// })


// Cypress.Commands.add('accessurl', () => {
//     cy.visit('/');
//     cy.wait(10000);
// });

// Cypress.Commands.add('calculate', () => {
//     cy.get('#originPostcode').type('08090-284');
//     cy.get('[id="object_format"]').click()
//     cy.contains('Caixa / Pacote').should('be.visible').click({ force: true });
//     cy.get('[id="weight"]').click()
//     cy.contains('Até 300g').should('be.visible').click();
//     cy.get('[id="packageHeight"]').type(2);
//     cy.get('[id="packageWidth"]').type(11);
//     cy.get('[id="packageDepth"]').type(16);
//     cy.get('#destinationPostcode').type('05407002');
//     cy.get('[data-cy="calculator-submit"]').click();
//     cy.get('[id="calculator-package-type-PAC-container"]').click();
//     cy.contains('Preço sem adicionais').should('be.visible');
//     cy.get('[id="calculator-SEDEX-valueColumn-div"]').click();
//     cy.contains('Preço sem adicionais').should('be.visible');
//     cy.get('[id="calculator-package-type-Mini Envios-container"]').click();
//     cy.contains('Nesta modalidade não há detalhamento de rastreio. Informaremos o momento da postagem e da entrega do objeto. Caso as medidas máximas sejam ultrapassadas, poderá ser alterada a modalidade de envio e o valor do seu frete, certifique-se de que a embalagem possui medidas iguais ou inferiores a 4cm x 16cm x 24cm e até 300g.').should('be.visible');
// })

// Cypress.Commands.add('ziporigin', () => {
//     cy.get('[id="object_format"]').click()
//     cy.contains('Caixa / Pacote').should('be.visible').click({ force: true });
//     cy.get('[id="weight"]').click()
//     cy.contains('Até 300g').should('be.visible').click();
//     cy.get('[id="packageHeight"]').type(2);
//     cy.get('[id="packageWidth"]').type(11);
//     cy.get('[id="packageDepth"]').type(16);
//     cy.get('#destinationPostcode').type('05407002');
//     cy.get('[data-cy="calculator-submit"]').click();
//     cy.contains('CEP de origem é obrigatório').should('be.visible');
// })

// Cypress.Commands.add('zipdestiny', () => {
//     cy.get('#originPostcode').type('08090-284');
//     cy.get('[id="object_format"]').click()
//     cy.contains('Caixa / Pacote').should('be.visible').click({ force: true });
//     cy.get('[id="weight"]').click()
//     cy.contains('Até 300g').should('be.visible').click();
//     cy.get('[id="packageHeight"]').type(2);
//     cy.get('[id="packageWidth"]').type(11);
//     cy.get('[id="packageDepth"]').type(16);
//     cy.get('[data-cy="calculator-submit"]').click();
//     cy.contains('CEP de destino é obrigatório').should('be.visible');

// })

// Cypress.Commands.add('dimension', () => {
//     cy.get('#originPostcode').type('08090-284');
//     cy.get('[id="object_format"]').click()
//     cy.contains('Caixa / Pacote').should('be.visible').click({ force: true });
//     cy.get('[id="weight"]').click()
//     cy.contains('Até 300g').should('be.visible').click();
//     cy.get('[id="packageHeight"]').type(0.3);
//     cy.get('[id="packageWidth"]').type(7);
//     cy.get('[id="packageDepth"]').type(11);
//     cy.get('#destinationPostcode').type('05407002');
//     cy.get('[data-cy="calculator-submit"]').click();
//     cy.contains('Altura mínima 0.4 cm.').should('be.visible');
//     cy.contains('Largura mínima 8 cm.').should('be.visible');
//     cy.contains('Comprimento mínimo 13 cm.').should('be.visible');
// })
