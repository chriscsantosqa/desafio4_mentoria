const modulo = require("./asserts/metodo.js");
const lista = require("./list/lista.js");
const chapeuSeletor = require("./asserts/chapeuSeletor.js");


modulo.percorrerLista(lista);
chapeuSeletor.escolhaChapeu(lista);
console.table(lista)