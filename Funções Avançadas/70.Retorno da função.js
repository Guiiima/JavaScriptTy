function soma(...args){
    let somados = 0;
    for(let i of args){
        somados += i;
    }
    return console.log(somados);
}
soma(4,3,2)