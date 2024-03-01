const nomes = ['Guima','Henrique','Oliveira'];
nomes.splice(-2, Number.MAX_VALUE)// remove do penultimo indice ate o valor maximo

var arr = [1, 2, 3, 4, 5];
var spliced = arr.splice(1, 2, 'banana'); // Remove [2, 3]
console.log(arr); // [1, 'banana', 4, 5]