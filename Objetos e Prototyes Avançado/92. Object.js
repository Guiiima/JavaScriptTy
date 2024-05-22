// Definindo o objeto produto
const produto = {
    nome: "Caneca",
    preco: 1.8,
  };
  
  // Exemplo de uso do método Object.create
  /**
   * Cria um novo objeto com o prototype especificado e, opcionalmente, com propriedades adicionais.
   * @param {object} proto - O objeto que será o prototype do novo objeto.
   * @param {object} [propertiesObject] - Um objeto contendo propriedades adicionais para o novo objeto.
   * @returns {object} - Um novo objeto com o prototype especificado e as propriedades adicionais.
   */
  const novoObjeto = Object.create(produto, {
    material: {
      value: "testinho"
    }
  });
  console.log(novoObjeto);
  
  // Exemplo de uso do método Object.entries
  /**
   * Retorna um array contendo pares [chave, valor] para cada propriedade enumerável de um objeto.
   * @param {object} obj - O objeto cujas propriedades serão retornadas.
   * @returns {Array<[string, any]>} - Um array contendo pares [chave, valor] para cada propriedade enumerável do objeto.
   */
  console.log(Object.entries(produto));
  
  // Exemplo de uso do método Object.values
  /**
   * Retorna um array contendo os valores das propriedades enumeráveis de um objeto.
   * @param {object} obj - O objeto cujos valores serão retornados.
   * @returns {any[]} - Um array contendo os valores das propriedades enumeráveis do objeto.
   */
  console.log(Object.values(produto));
  
  // Exemplo de uso do método Object.getOwnPropertyNames
  /**
   * Retorna um array contendo os nomes de todas as propriedades (enumeráveis ou não) de um objeto.
   * @param {object} obj - O objeto cujos nomes de propriedade serão retornados.
   * @returns {string[]} - Um array contendo os nomes de todas as propriedades do objeto.
   */
  console.log(Object.getOwnPropertyNames(produto));
  
  // Exemplo de uso do método Object.getOwnPropertyDescriptors
  /**
   * Retorna um objeto contendo todos os descritores de propriedade próprios de um objeto.
   * @param {object} obj - O objeto cujos descritores de propriedade serão retornados.
   * @returns {object} - Um objeto contendo todos os descritores de propriedade próprios do objeto.
   */
  console.log(Object.getOwnPropertyDescriptors(produto));
  
  // Exemplo de uso do método Object.seal
  /**
   * Sela um objeto, impedindo a adição ou remoção de propriedades, mas permitindo a modificação das propriedades existentes.
   * @param {object} obj - O objeto a ser selado.
   * @returns {object} - O objeto selado.
   */
  Object.seal(produto);
  console.log(Object.isSealed(produto)); // true
  
  // Exemplo de uso do método Object.is
  /**
   * Verifica se dois valores são os mesmos.
   * @param {any} obj1 - O primeiro valor a ser comparado.
   * @param {any} obj2 - O segundo valor a ser comparado.
   * @returns {boolean} - true se os valores são os mesmos, false caso contrário.
   */
  console.log(Object.is(5, 5)); // true
  
  // Exemplo de uso do método Object.fromEntries
  /**
   * Cria um novo objeto a partir de um objeto iterável (como um array de pares [chave, valor]).
   * @param {Iterable} iterable - O objeto iterável a ser convertido em objeto.
   * @returns {object} - Um novo objeto criado a partir do objeto iterável.
   */
  const entries = [['a', 1], ['b', 2], ['c', 3]];
  const newObj = Object.fromEntries(entries);
  console.log(newObj);
  
  // Exemplo de uso do método Object.setPrototypeOf
  /**
   * Define o prototype de um objeto para outro objeto ou null.
   * @param {object} obj - O objeto cujo prototype será definido.
   * @param {object|null} proto - O objeto que será o novo prototype ou null.
   * @returns {object} - O objeto com o prototype modificado.
   */
  Object.setPrototypeOf(newObj, produto);
  console.log(Object.getPrototypeOf(newObj)); // { nome: "Caneca", preco: 1.8 }
  
  // Exemplo de uso do método Object.keys
  /**
   * Retorna um array contendo as chaves (propriedades enumeráveis) de um objeto.
   * @param {object} obj - O objeto cujas chaves serão retornadas.
   * @returns {string[]} - Um array contendo as chaves do objeto.
   */
  console.log(Object.keys(produto));
  
  // Exemplo de uso do método Object.isExtensible
  /**
   * Verifica se um objeto é extensível, ou seja, se novas propriedades podem ser adicionadas a ele.
   * @param {object} obj - O objeto a ser verificado.
   * @returns {boolean} - true se o objeto é extensível, false caso contrário.
   */
  console.log(Object.isExtensible(produto)); // false
  
  // Exemplo de uso do método Object.preventExtensions
  /**
   * Torna um objeto não extensível, impedindo a adição de novas propriedades.
   * @param {object} obj - O objeto a ser tornado não extensível.
   * @returns {object} - O objeto não extensível.
   */
  Object.preventExtensions(produto);
  console.log(Object.isExtensible(produto)); // false
  
  // Exemplo de uso do método Object.isSealed
  /**
   * Verifica se um objeto está selado, ou seja, se não é possível adicionar ou remover propriedades, mas ainda é possível modificar as propriedades existentes.
   * @param {object} obj - O objeto a ser verificado.
   * @returns {boolean} - true se o objeto está selado, false caso contrário.
   */
  console.log(Object.isSealed(produto)); // true
  
  // Exemplo de uso do método Object.isFrozen
  /**
   * Verifica se um objeto está congelado, ou seja, se não é possível adicionar, remover ou modificar propriedades.
   * @param {object} obj - O objeto a ser verificado.
   * @returns {boolean} - true se o objeto está congelado, false caso contrário.
   */
  console.log(Object.isFrozen(produto)); // true
  