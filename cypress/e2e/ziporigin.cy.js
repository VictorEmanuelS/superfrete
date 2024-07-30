
const { calcularFrete, SuperFrete } = require("../support/pageobject/calculatePages")

describe('Acesslink', () => {
    beforeEach(() => {
        calcularFrete.acessarUrl();
        calcularFrete.limpalocal();
        calcularFrete.limpacookie();
        calcularFrete.wait();
    });
    it('Validar que usuário não informa cep de origem, retorna mensagem de erro', () => {
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