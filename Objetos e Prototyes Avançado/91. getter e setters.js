// Definindo o construtor Produto
function Produto(nome, preco, estoque) {
    // Atribuindo os parâmetros às propriedades do objeto
    this.nome = nome;
    this.preco = preco;
    
    // Usamos uma variável privada para armazenar o valor de 'estoque'
    let estoquePrivado = estoque;
    
    // Definindo a propriedade 'estoque' usando Object.defineProperty
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // A propriedade será listada ao enumerar as propriedades do objeto
        configurable: true, // A propriedade poderá ser redefinida ou removida posteriormente
        get: function() { // Getter para 'estoque'
            return estoquePrivado;
        },
        set: function(valor) { // Setter para 'estoque'
            if (typeof valor === 'number' && valor >= 0) {
                estoquePrivado = valor; // Define o novo valor para 'estoquePrivado' se for um número não negativo
            } else {
                throw new TypeError('O valor deve ser um número não negativo');
            }
        }
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

// Tentando modificar a propriedade 'estoque' usando o setter
p1.estoque = 10; // Funciona pois o setter permite modificar
console.log(p1.estoque); // Output: 10

// Tentando atribuir um valor inválido para 'estoque'
try {
    p1.estoque = -5; // Lança um erro pois o valor é inválido
} catch (e) {
    console.log(e.message); // Output: O valor deve ser um número não negativo
}

// Modificando a propriedade 'preco' (permitido pois writable é true)
p1.preco = 25;
console.log(p1.preco); // Output: 25

// Removendo a propriedade 'nome' (permitido pois configurable é true)
delete p1.nome;
console.log(p1.nome); // Output: undefined

// Usando instanceof para verificar a instância do objeto
console.log(p1 instanceof Produto); // true
console.log(p1 instanceof Object);  // true

// Exemplo adicional com instanceof
function Veiculo(tipo) {
    this.tipo = tipo;
}

const carro = new Veiculo('Carro');

console.log(carro instanceof Veiculo); // true
console.log(carro instanceof Object);  // true

function Bicicleta() {}
Bicicleta.prototype = Object.create(Veiculo.prototype);
Bicicleta.prototype.constructor = Bicicleta;

const minhaBicicleta = new Bicicleta();

console.log(minhaBicicleta instanceof Bicicleta); // true
console.log(minhaBicicleta instanceof Veiculo);   // true
console.log(minhaBicicleta instanceof Object);    // true
