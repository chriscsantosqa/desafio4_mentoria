module.exports = {
  escolhaChapeu(bruxos) {
    console.log("\nMinerva McGonagall: Quando eu chamar seus nomes deem um passo a frente, eu vou colocar o chapéu seletor em suas cabeças e serão selecionados para suas respectivas casas em Hogwarts!\n");

    const casas = ["Grifinória", "Corvinal", "Lufa-Lufa", "Sonserina"];

    for (const bruxo of bruxos) {
      const casaEscolhida = Math.floor(Math.random() * casas.length);
      console.log(`${bruxo.nome} um passo a frente!!`);

      if (casaEscolhida >= 0 && casaEscolhida < casas.length) {
        bruxo.casa = casas[casaEscolhida];
        console.log(`Chapéu Seletor: Ahhh muito bem, hummmm certo, muito bem, ${bruxo.casa}!!\n`);
      } else {
        console.log(`A casa ${casaEscolhida} não existe!`);
      }
    }
  }
};