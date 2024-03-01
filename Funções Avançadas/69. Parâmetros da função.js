//Function tem um argumento que sustenta todos os argumentos enviados porem n funciona em arrow function
function funcao() {
  console.log(arguments);
}
funcao("Valor");

//posso enviar as variaveis de um objeto
function funObj({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
funObj({ nome: "Gui", sobrenome: "Henrique", idade: 20 });

//posso enviar as variaveis de um array
function funArr([ valor1, valor2, valor3 ]) {
    console.log(valor1, valor2, valor3);
}
funArr(['Guilherme Henrique', 'Aparecido', 30])

// A partir do acumulador todos argumentos que viram depois vai ser transformado em um array por conta do hash "..."
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}
conta('+', 1, 20, 30, 40, 50)