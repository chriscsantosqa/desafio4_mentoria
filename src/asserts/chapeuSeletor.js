module.exports = chapeuSeletor = {
  escolhaChapeu(bruxos){
    console.log("\nMinerva McGonagall: Quando eu chamar seus nomes deem um passo a frente, eu vou colocar o chapéu seletor em suas cabeças e serão selecionados para suas respectivas casas em Hogwarts!\n")
    for (let i = 0; i < bruxos.length; i++) {
      const casaEscolhida = Math.floor(Math.random() * 4);
      console.log(`${bruxos[i].nome} um passo a frente!!`)
      switch (casaEscolhida) {
        case 0:
            bruxos[i].casa = "Grifinória";
            console.log(`Chapéu Seletor: Ahhh muito bem, hummmm certo, muito bem, ${bruxos[i].casa}!!\n`)
            break;
        case 1:
          bruxos[i].casa = "Corvinal";
          console.log(`Chapéu Seletor: Ahhh muito bem, hummmm certo, muito bem, ${bruxos[i].casa}!!\n`)
            break;
        case 2:
          bruxos[i].casa = "Lufa-Lufa";
          console.log(`Chapéu Seletor: Ahhh muito bem, hummmm certo, muito bem, ${bruxos[i].casa}!!\n`)
            break;
        case 3:
          bruxos[i].casa = "Sonserina";
          console.log(`Chapéu Seletor: Ahhh muito bem, hummmm certo, muito bem, ${bruxos[i].casa}!!\n`)
            break;
        default:
            console.log(`A ${casaEscolhida} não existe!`)
            break;
    }
    }
  }
}
const lista = require("./list/lista.js");