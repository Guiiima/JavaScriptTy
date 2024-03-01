function falaOi() {
  console.log("Alguma coisa");
}
falaOi();

// Funcões são First-class objects(Objetos de primeira classes)
// Funciotion Expression
const souUmDadoDeFuncao = function () {
  console.log("Sou um dado");
};
souUmDadoDeFuncao();

function executaFuncao(funcao) {
  console.log("Executa a função que é passada como parametro");
  funcao();
}
executaFuncao(souUmDadoDeFuncao);

//Arrow Function
const funcaoArrow = () => {
  console.log("Sou uma função com arrow function");
};