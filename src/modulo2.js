const listaDeBruxos = require("../src/lista.js");

console.table(listaDeBruxos);

function percorreLista(lista) {
  let lifeFase;

  lista.forEach((bruxo) => {
    if (typeof bruxo.idade === "number" && bruxo.idade >= 0 && bruxo.idade < 12) {
        lifeFase = "Pequeno(a) Bruxinho(a)";
    } else if (typeof bruxo.idade === "number" && bruxo.idade >= 12 && bruxo.idade < 18) {
      lifeFase = "Jovem Bruxo(a)";
    } else if (typeof bruxo.idade === "number" && bruxo.idade > 18) {
      lifeFase = "Bruxo(a)";
    } else {
      console.log("Idade não é válida!");
    }
    console.log(`${lifeFase} ${bruxo.nome}, você está sendo convocado(a) para escola de magia e bruxaria de Hogwarts`);
  });
  console.log(`\nO número total de bruxos(as) listados(as) é: ${lista.length}`);
  return lista.length;
}

module.exports = percorreLista;
