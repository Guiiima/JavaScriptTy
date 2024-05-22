// Definindo o construtor Produto
function Produto(nome, preco, estoque) {
    // Atribuindo os parâmetros às propriedades do objeto
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    // Definindo a propriedade 'estoque' usando Object.defineProperty
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // A propriedade será listada ao enumerar as propriedades do objeto
        value: estoque, // O valor inicial da propriedade 'estoque'
        writable: false, // A propriedade não poderá ser modificada após ser definida
        configurable: true // A propriedade poderá ser redefinida ou removida posteriormente
    });

    // Definindo múltiplas propriedades usando Object.defineProperties
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // A propriedade será listada ao enumerar as propriedades do objeto
            value: nome, // O valor inicial da propriedade 'nome'
            writable: false, // A propriedade não poderá ser modificada após ser definida
            configurable: true // A propriedade poderá ser redefinida ou removida posteriormente
        },
        preco: {
            enumerable: true, // A propriedade será listada ao enumerar as propriedades do objeto
            value: preco, // O valor inicial da propriedade 'preco'
            writable: true, // A propriedade poderá ser modificada após ser definida
            configurable: true // A propriedade poderá ser redefinida ou removida posteriormente
        }
    });
}

// Criando uma instância do objeto Produto
const p1 = new Produto('Camiseta', 20, 3);

// Exibindo as chaves (propriedades) do objeto p1
console.log(Object.keys(p1)); // Output: [ 'nome', 'preco', 'estoque' ]

// Tentando modificar a propriedade 'estoque' (não terá efeito pois writable é false)
p1.estoque = 10;
console.log(p1.estoque); // Output: 3

// Modificando a propriedade 'preco' (permitido pois writable é true)
p1.preco = 25;
console.log(p1.preco); // Output: 25

// Removendo a propriedade 'nome' (permitido pois configurable é true)
delete p1.nome;
console.log(p1.nome); // Output: undefined
