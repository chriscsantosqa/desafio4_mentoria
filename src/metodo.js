module.exports = {
  percorrerLista(lista){
    lista.forEach((bruxo) => {
      let lifeFase;
      const {nome, idade} = bruxo;
      if (typeof idade === "number" && idade >= 0 && idade < 12) {
          lifeFase = "Pequeno(a) Bruxinho(a)";
      } else if (typeof idade === "number" && idade >= 12 && idade < 18) {
        lifeFase = "Jovem Bruxo(a)";
      } else if (typeof idade === "number" && idade > 18) {
        lifeFase = "Bruxo(a)";
      } else {
        console.log("Idade inválida!");
        return;
      }
      console.log(`${lifeFase} ${nome}, você está sendo convocado(a) para a escola de magia e bruxaria de Hogwarts`);
  
    });
    console.log(`\nO número total de bruxos(as) listados(as) é: ${lista.length}`);
    return lista.length;
  }
}