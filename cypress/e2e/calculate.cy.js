const { calcularFrete, SuperFrete } = require("../support/pageobject/calculatePages")

describe('Acesslink', () => {
    beforeEach(() => {
        calcularFrete.acessarUrl();
        calcularFrete.limpalocal();
        calcularFrete.limpacookie();
        calcularFrete.wait();
    });
    it('CalcularFrete', () => {
        calcularFrete.preencheCep();
        calcularFrete.formato();
        calcularFrete.peso();
        calcularFrete.altura();
        calcularFrete.largura();
        calcularFrete.comprimento();
        calcularFrete.cepdestino();
        calcularFrete.fretecomdesconto();
        calcularFrete.pac();
        calcularFrete.sedex();
        calcularFrete.minienvio();
    })

});