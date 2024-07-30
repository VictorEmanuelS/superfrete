const { calcularFrete, SuperFrete } = require("../support/pageobject/calculatePages")

describe('Acesslink', () => {
    beforeEach(() => {
        calcularFrete.acessarUrl();
        calcularFrete.limpalocal();
        calcularFrete.limpacookie();
        calcularFrete.wait();
    });
    it('Validar que usuário não informa cep de destino, retorna mensagem de erro', () => {
        calcularFrete.preencheCep();
        calcularFrete.formato();
        calcularFrete.peso();
        calcularFrete.altura();
        calcularFrete.largura();
        calcularFrete.comprimento();
        calcularFrete.fretecomdesconto();
        calcularFrete.cepdestinoobrigatorio();
    })

});