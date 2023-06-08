let listaDeBruxos = [
  {
    nome: "Gabriela Mcgonagall",
    idade: 17,
    email: "gabimacgonagall@hogwarts.com",
    casa: "Grifinória",
  },
  {
    nome: "Bruna Weasley",
    idade: 13,
    email: "bruhweasley@hogwarts.com",
    casa: "Corvinal",
  },
  {
    nome: "Kamila Potter",
    idade: 21,
    email: "milapotter@hogwarts.com",
    casa: "Grifinória",
  },
  {
    nome: "Christopher Hagrid",
    idade: 19,
    email: "chrishagrid@hogwarts.com",
    casa: "Grifinória",
  },
  {
    nome: "Ester Lovegood",
    idade: 11,
    email: "esterlovegood@hogwarts.com",
    casa: "Lufa-Lufa",
  },
];

function percorreLista(lista, retorno) {
  for (let i = 0; i < lista.length; i++) {
    retorno(i, lista[i]);
  }
}

percorreLista(listaDeBruxos, (i, bruxo) => {
  if (bruxo.idade >= 0 && bruxo.idade < 12) {
    console.log(
      `Pequena bruxinho(a) ${bruxo.nome}, você está sendo convocado(a) para escola de magia e bruxaria de Hogwarts`
    );
  }
  if (bruxo.idade >= 12 && bruxo.idade < 18) {
    console.log(
      `Jovem bruxo(a) ${bruxo.nome}, você está sendo convocado(a) para escola de magia e bruxaria de Hogwarts`
    );
  }
  if (bruxo.idade > 18) {
    console.log(
      `Bruxo(a) ${bruxo.nome}, você está sendo convocado(a) para escola de magia e bruxaria de Hogwarts`
    );
  }
});

console.log(listaDeBruxos.length);
console.log("test");
