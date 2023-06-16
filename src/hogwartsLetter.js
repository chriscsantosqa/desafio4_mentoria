const modulo = require("./asserts/metodos/metodo.js");
const lista = require("./asserts/pessoas/lista.js");
const chapeuSeletor = require("./asserts/metodos/chapeuSeletor.js");


modulo.percorrerLista(lista);
chapeuSeletor.escolhaChapeu(lista);
console.table(lista);