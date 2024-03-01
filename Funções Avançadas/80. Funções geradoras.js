function* Gerador(){
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}
const p1 = Gerador();

for(let i of p1){
    console.log(i)
}