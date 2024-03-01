function criarPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        //Quando quero só pegar informação posso usar um getter
        get nomeCompleto(){
            return this.nome + this.sobrenome
        },
        fala: function(assunto){
            return `${nome} esta ${assunto}.`;
        },
      
    };
}
const p1 = criarPessoa('Luiz', 'Otávio');
//Sendo uma função de getter eu n preciso usar ()
console.log(p1.nomeCompleto)
console.log(p1.fala('Falando sobre JS'))