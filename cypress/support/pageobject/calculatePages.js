const elem = require('./gui_commands').elements;

export class SuperFrete {

    acessarUrl() {
        cy.visit('/');
    }

    wait() {
        cy.wait(10000);
    }

    preencheCep() {
        cy.get(elem.ziporigin).type('08090-284');
    }

    limpacookie() {
        cy.clearCookies();

    }
    limpalocal() {
        cy.clearLocalStorage();
    }
    formato() {
        cy.get(elem.formato).click()
        cy.contains(elem.pacote).should('be.visible').click({ force: true });
    }
    peso() {
        cy.get(elem.peso).click()
        cy.contains(elem.gramas).should('be.visible').click();
    }
    altura() {
        cy.get(elem.altura).type(2);
    }
    largura() {
        cy.get(elem.largura).type(11);
    }
    comprimento() {
        cy.get(elem.comprimento).type(16);
    }
    cepdestino() {
        cy.get(elem.zipdestino).type('05407002');
    }
    fretecomdesconto() {
        cy.get(elem.fretecomdesconto).click();
    }
    pac() {
        cy.get(elem.pac).click()
        cy.contains(elem.preçoadicional).should('be.visible');
    }
    sedex() {
        cy.get(elem.sedex).click();
        cy.contains(elem.preçoadicional).should('be.visible');
    }
    minienvio() {
        cy.get(elem.minienvio).click();
        cy.contains(elem.mensagemmine).should('be.visible');
    }
    cepdestinoobrigatorio() {
        cy.contains(elem.cepdedestinoobrigatorio).should('be.visible');
    }

    ceporiginal() {
        cy.contains(elem.ceporiginal).should('be.visible');
    }
    erro() {
        cy.get(elem.altura).type(0.3);
        cy.get(elem.largura).type(7);
        cy.get(elem.comprimento).type(11);

    }
    errocomprimento() {
        cy.contains(elem.errolargura).should('be.visible');
        cy.contains(elem.erroaltura).should('be.visible');
        cy.contains(elem.errocomprimento).should('be.visible');
    }
}


export const calcularFrete = new SuperFrete();