function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Primeiro jeito de fazer um metodo dentro de um objeto é usando this
    this.metoto = function(){
        console.log('Teste')
    }
}
// Segundo jeito de declarar uma função dentro de um objeto
Pessoa.prototype.metodoInternoTeste = function(){
    console.log(this.nome + ' sou eu');
};

const p1 = new Pessoa('Gui', 'Henrique');
p1.metoto();
p1.metodoInternoTeste();
console.log(p1);
