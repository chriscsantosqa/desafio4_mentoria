var assert = require("assert");
const modulo = require("../src/modulo2.js");
const lista = require("../src/lista.js");

describe("Test Suite", () => {
  it.only("A quantidade de bruxinhos(as) é equivalente a 5?", () => {
    let result = modulo(lista);
    assert.equal(result, 5);
    console.log(lista[0].idade)
  });
});
