(function (idade, peso, altura) {
  //pode n passar nada
  console.log(idade, peso, altura);
  const sobrenome = "Gui";
  function criarNome(nome) {
    return nome + " " + sobrenome;
  }
  function falaNome() {
    console.log(criarNome("Guimma"));
  }
  falaNome();
})();
//Protegendo do scopo globals
//Immediately invoked function express
