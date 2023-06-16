const listaDeBruxos = require("../src/lista.js");

console.table(listaDeBruxos);

function percorrerLista(lista) {
  let lifeFase;
  let n = 0;
  let x = 0;
  let y = 0;

  lista.forEach((bruxo) => {
    if (typeof bruxo.idade === "number" && bruxo.idade >= 0 && bruxo.idade < 12) {
        lifeFase = "Pequeno(a) Bruxinho(a)";
        n++
    } else if (typeof bruxo.idade === "number" && bruxo.idade >= 12 && bruxo.idade < 18) {
      lifeFase = "Jovem Bruxo(a)";
        x++
    } else if (typeof bruxo.idade === "number" && bruxo.idade > 18) {
      lifeFase = "Bruxo(a)";
        y++
    } else {
      console.log("Idade inválida!");
    }
    console.log(`${lifeFase} ${bruxo.nome}, você está sendo convocado(a) para escola de magia e bruxaria de Hogwarts`);

  });
  console.log(`\nO número total de bruxos(as) listados(as) é: ${lista.length}`);
  console.log(n)
  console.log(x)
  console.log(y)
  return lista.length;
}

module.exports = percorrerLista;
