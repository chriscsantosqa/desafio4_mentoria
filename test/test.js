const assert = require("assert");
const sinon = require('sinon');
const modulo = require("../src/metodo.js");
const lista = require("../src/lista.js");

describe("Test Suite", () => {
  let consoleLogStub;
  modulo.percorrerLista(lista);

  beforeEach(function () {
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(function () {
    consoleLogStub.restore();
  });
  it("Verificar se quantidade de bruxinhos(as) na lista é equivalente a 5", () => {
    let result = modulo.percorrerLista(lista);
    assert.equal(result, 5);
  });

  it('Verificar a classificação correta dos bruxos de acordo com as idades', () => {
    modulo.percorrerLista(lista); //função é executada pra ter os retornos a serem testados abaixo

    assert.strictEqual(consoleLogStub.callCount, 6); // 5 mensagens de output + 1 mensagem de contagem
    assert.strictEqual(consoleLogStub.getCall(0).args[0], 'Jovem Bruxo(a) Gabriela Mcgonagall, você está sendo convocado(a) para a escola de magia e bruxaria de Hogwarts');
    assert.strictEqual(consoleLogStub.getCall(1).args[0], 'Jovem Bruxo(a) Bruna Weasley, você está sendo convocado(a) para a escola de magia e bruxaria de Hogwarts');
    assert.strictEqual(consoleLogStub.getCall(2).args[0], 'Bruxo(a) Kamila Potter, você está sendo convocado(a) para a escola de magia e bruxaria de Hogwarts');
    assert.strictEqual(consoleLogStub.getCall(3).args[0], 'Bruxo(a) Christopher Hagrid, você está sendo convocado(a) para a escola de magia e bruxaria de Hogwarts');
    assert.strictEqual(consoleLogStub.getCall(4).args[0], 'Pequeno(a) Bruxinho(a) Ester Lovegood, você está sendo convocado(a) para a escola de magia e bruxaria de Hogwarts');
    assert.strictEqual(consoleLogStub.lastCall.args[0], '\nO número total de bruxos(as) listados(as) é: 5');
  });
});
