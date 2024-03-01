const nomes = ['Guima','Henrique','Oliveira'];
nomes[2]='Joao'
delete nomes[2];
nomes.pop() // apaga o ultimo elemento do array
nomes.shift()// apaga o primeiro elemento do array
nomes.length()// mostra tamanho do array
const removido = nomes.pop()// da pra guardar indice removido
nomes.push('joao') // adiciona itens a lista
nomes.unshift('Guita')// adiciona os itens no começo da lista
nomes.slice(1, 3) // corta o array caso eu coloque slice(0, -1) eu removo o primeiro e o ultimo indice
var arr = [1, 2, 3, 4, 5];
var sliced = arr.slice(1, 3); // Retorna [2, 3]
console.log(arr); // [1, 2, 3, 4, 5]
nomes.join()// ele junta os elementos de um array em uma string

console.log(nomes)