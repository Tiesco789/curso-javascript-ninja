// # Desafio da semana #2

// Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções!

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function myFunction(a, b) {
  return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let myVar = myFunction(2, 2 + 5);

// Qual o valor atualizado dessa variável?
9;

// Declare uma nova variável, sem valor.
let test;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function testes() {
  test = 'outro valor';
  return `O valor da variável agora é ${test}`;
}

// Invoque a função criada acima.
testes();

// Qual o retorno da função? (Use comentários de bloco).
// 'O valor da variável agora é outro valor'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function triArgs(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
    return 'Preencha os dados corretamente';
  }
  return a * b * c + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
triArgs(3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// "Preencha os dados corretamente"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
triArgs(3, 3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 29

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function manyArgs(a, b, c) {
  if (a !== undefined && b === undefined && c === undefined) {
    return a;
  }

  if (a !== undefined && b !== undefined && c === undefined) {
    return a + b;
  }

  if (a !== undefined && b !== undefined && c !== undefined) {
    return (a + b) / c;
  }

  if (a === undefined && b === undefined && c === undefined) {
    return false;
  }

  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
manyArgs(); // false
manyArgs(1); // 1
manyArgs(1, 2); // 3
manyArgs(1, 2, 4); // 0.75
manyArgs(null); // null