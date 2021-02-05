/*

Crie uma função que descubra se um valor é par ou ímpar.

Neste exercício nós utilizarmos o operador módulo %.

A operação módulo encontra o resto da divisão de um número por outro.

Dados dois números a (o dividendo) e b o divisor, a modulo b (a mod b)
é o resto da divisão de a por b.

Por exemplo, 7 mod 3 seria 1, enquanto 9 mod 3 seria 0.

*/

function evenOrodd(number: number):string {
  if (number % 2 === 0) return 'even';
  return 'odd';
}

console.log(evenOrodd(7));
