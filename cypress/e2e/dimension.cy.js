const { calcularFrete, SuperFrete } = require("../support/pageobject/calculatePages")

describe('Acesslink', () => {
    beforeEach(() => {
        calcularFrete.acessarUrl();
        calcularFrete.limpalocal();
        calcularFrete.limpacookie();
        calcularFrete.wait();
    });
    it('dimensao', () => {
        calcularFrete.wait();
        calcularFrete.preencheCep();
        calcularFrete.formato();
        calcularFrete.peso();
        calcularFrete.erro();
        calcularFrete.cepdestino();
        calcularFrete.fretecomdesconto();
        calcularFrete.errocomprimento();
    })

});