const listaDeBruxos = require("../src/lista.js");

console.table(listaDeBruxos);

function percorreLista(lista) {
  lista.forEach((bruxo) => {
    let lifeFase;

    if (bruxo.idade >= 0 && bruxo.idade < 12 && typeof bruxo.idade === "number") {
        lifeFase = "Pequeno(a) Bruxinho(a)";
    } else if (bruxo.idade >= 12 && bruxo.idade < 18 && typeof bruxo.idade === "number") {
      lifeFase = "Jovem Bruxo(a)";
    } else if (bruxo.idade > 18 && typeof bruxo.idade === "number") {
      lifeFase = "Bruxo(a)";
    } else {
      console.log("Idade não é válida!");
    }
    console.log(`${lifeFase} ${bruxo.nome}, você está sendo convocado(a) para escola de magia e bruxaria de Hogwarts`);
  });
  console.log(`\nO número total de bruxos(as) listadas é: ${lista.length}`);
  return lista.length;
}

module.exports = percorreLista;
