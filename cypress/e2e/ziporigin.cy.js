
const { calcularFrete, SuperFrete } = require("../support/pageobject/calculatePages")

describe('Acesslink', () => {
    beforeEach(() => {
        calcularFrete.acessarUrl();
        calcularFrete.limpalocal();
        calcularFrete.limpacookie();
        calcularFrete.wait();
    });
    it('CepDeDestino', () => {
        calcularFrete.formato();
        calcularFrete.peso();
        calcularFrete.altura();
        calcularFrete.largura();
        calcularFrete.comprimento();
        calcularFrete.cepdestino();
        calcularFrete.ceporiginal
        calcularFrete.fretecomdesconto();
    })

});