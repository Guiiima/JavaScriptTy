// Protótipo:
// Em JavaScript, cada objeto tem uma propriedade interna chamada [[Prototype]], que se refere a outro objeto chamado de protótipo.
// Quando você acessa uma propriedade de um objeto, o JavaScript primeiro procura essa propriedade no próprio objeto.
// Se não encontrar, ele busca no protótipo do objeto e continua subindo na cadeia de protótipos até encontrar a propriedade desejada.
// Isso permite a herança de propriedades e métodos entre objetos em JavaScript.

// Definindo um construtor para objetos 'Produto'
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  
  // Adicionando um método ao protótipo de Produto
  Produto.prototype.mostrarPreco = function() {
    console.log(`O preço da ${this.nome} é R$ ${this.preco.toFixed(2)}.`);
  };
  
  // Criando uma instância de Produto
  const produto1 = new Produto('Caneca', 10.99);
  
  // Chamando o método do protótipo
  produto1.mostrarPreco(); // Output: O preço da Caneca é R$ 10.99.
  