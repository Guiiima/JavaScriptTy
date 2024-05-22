// Exemplo completo utilizando operador spread e rest

// Função que utiliza o operador rest para capturar múltiplos argumentos
/**
 * Soma todos os números fornecidos como argumentos.
 * @param {...number} args - Números a serem somados.
 * @returns {number} - A soma de todos os argumentos.
 */
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Função que utiliza o operador rest para capturar múltiplos argumentos
/**
 * Multiplica cada número nos argumentos fornecidos pelo multiplicador.
 * @param {number} multiplier - O multiplicador.
 * @param {...number} args - Números a serem multiplicados.
 * @returns {number[]} - Array com os resultados da multiplicação.
 */
function multiply(multiplier, ...args) {
    return args.map(arg => arg * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]

// Usando spread para copiar um array
const array1 = [1, 2, 3];
/**
 * Copia um array usando o operador spread.
 * @param {number[]} array - O array a ser copiado.
 * @returns {number[]} - Uma nova cópia do array.
 */
const array2 = [...array1];
console.log(array2); // Output: [1, 2, 3]

// Usando spread para concatenar arrays
const array3 = [4, 5, 6];
/**
 * Concatena dois arrays usando o operador spread.
 * @param {number[]} arr1 - Primeiro array.
 * @param {number[]} arr2 - Segundo array.
 * @returns {number[]} - Um novo array concatenado.
 */
const combinedArray = [...array1, ...array3];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Usando spread para passar elementos de um array como argumentos para uma função
/**
 * Encontra o maior número em um array usando o operador spread.
 * @param {number[]} nums - Array de números.
 * @returns {number} - O maior número no array.
 */
const maxNumber = Math.max(...array1);
console.log(maxNumber); // Output: 3

// Usando spread para copiar um objeto
const obj1 = { a: 1, b: 2 };
/**
 * Copia um objeto usando o operador spread.
 * @param {object} obj - O objeto a ser copiado.
 * @returns {object} - Uma nova cópia do objeto.
 */
const obj2 = { ...obj1 };
console.log(obj2); // Output: { a: 1, b: 2 }

// Usando spread para mesclar objetos
const obj3 = { c: 3, d: 4 };
/**
 * Mescla dois objetos usando o operador spread.
 * @param {object} objA - Primeiro objeto.
 * @param {object} objB - Segundo objeto.
 * @returns {object} - Um novo objeto mesclado.
 */
const mergedObj = { ...obj1, ...obj3 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Função de exemplo que cria um objeto Produto utilizando rest e spread
/**
 * Cria um objeto Produto com características adicionais.
 * @param {string} nome - Nome do produto.
 * @param {number} preco - Preço do produto.
 * @param {...string} caracteristicas - Características adicionais do produto.
 * @returns {object} - Objeto Produto com as características.
 */
function criarProduto(nome, preco, ...caracteristicas) {
    return {
        nome,
        preco,
        caracteristicas
    };
}

const produto = criarProduto('Camiseta', 20, 'Algodão', 'Branca', 'Manga Curta');
console.log(produto);
// Output: { nome: 'Camiseta', preco: 20, caracteristicas: ['Algodão', 'Branca', 'Manga Curta'] 

// Usando spread para copiar o objeto
const copiaTeste = { ...teste };
console.log(copiaTeste);
// Output: { nome: 'gui', endereco: { rua: 'iguacu', numero: 83 } }

// Usando spread para copiar o objeto e modificar uma propriedade
const copiaComModificacao = { ...teste, nome: 'joao' };
console.log(copiaComModificacao);
// Output: { nome: 'joao', endereco: { rua: 'iguacu', numero: 83 } }

// Usando spread para copiar e modificar propriedades aninhadas
const copiaComEnderecoModificado = {
    ...teste,
    endereco: { ...teste.endereco, rua: 'nova rua' }
};
console.log(copiaComEnderecoModificado);
// Output: { nome: 'gui', endereco: { rua: 'nova rua', numero: 83 } }

// Definindo o objeto 'teste' original
const teste = {
    nome: 'gui',
    endereco: {
        rua: 'iguacu',
        numero: 83,
    }
};

// Exemplo 1: Adicionando uma nova propriedade 'cidade' ao objeto 'endereco'
/**
 * Adiciona a propriedade 'cidade' ao objeto 'endereco' dentro de 'teste'.
 * @param {object} original - O objeto original.
 * @param {string} cidade - A cidade a ser adicionada.
 * @returns {object} - Um novo objeto com a propriedade 'cidade' adicionada.
 */
const adicionarCidade = (original, cidade) => {
    return {
        ...original,
        endereco: {
            ...original.endereco,
            cidade: cidade
        }
    };
};

const testeComCidade = adicionarCidade(teste, 'Curitiba');
console.log(testeComCidade);
// Output: { nome: 'gui', endereco: { rua: 'iguacu', numero: 83, cidade: 'Curitiba' } }

// Exemplo 2: Modificando a propriedade 'rua' do objeto 'endereco'
/**
 * Modifica a propriedade 'rua' do objeto 'endereco' dentro de 'teste'.
 * @param {object} original - O objeto original.
 * @param {string} novaRua - O novo nome da rua.
 * @returns {object} - Um novo objeto com a propriedade 'rua' modificada.
 */
const modificarRua = (original, novaRua) => {
    return {
        ...original,
        endereco: {
            ...original.endereco,
            rua: novaRua
        }
    };
};

const testeComRuaModificada = modificarRua(teste, 'nova rua');
console.log(testeComRuaModificada);
// Output: { nome: 'gui', endereco: { rua: 'nova rua', numero: 83 } }

// Exemplo 3: Combinando adição e modificação de propriedades
/**
 * Adiciona a propriedade 'cidade' e modifica a propriedade 'rua' do objeto 'endereco' dentro de 'teste'.
 * @param {object} original - O objeto original.
 * @param {string} novaRua - O novo nome da rua.
 * @param {string} cidade - A cidade a ser adicionada.
 * @returns {object} - Um novo objeto com as propriedades 'rua' modificada e 'cidade' adicionada.
 */
const combinarAdicaoModificacao = (original, novaRua, cidade) => {
    return {
        ...original,
        endereco: {
            ...original.endereco,
            rua: novaRua,
            cidade: cidade
        }
    };
};

const testeCombinado = combinarAdicaoModificacao(teste, 'nova rua', 'Curitiba');
console.log(testeCombinado);
// Output: { nome: 'gui', endereco: { rua: 'nova rua', numero: 83, cidade: 'Curitiba' } }

// Verificando que o objeto original 'teste' não foi modificado
console.log(teste);
// Output: { nome: 'gui', endereco: { rua: 'iguacu', numero: 83 } }
