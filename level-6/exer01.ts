/*

Faça um programa que calcule o fatorial de um número qualquer.

Vamos lembrar o que é o fatorial?

Seja n um número natural, tal que n >= 2,
chama-se fatorial de n o produto de todos os números naturais consecutivos de n até 1.

Por exemplo,

5! = 1 x 2 x 3 x 4 x 5 = 120
Veja mais alguns resultados e que você poderá utilizar como testes:

0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
Atente que 0! = 1 porque o produto vazio (produto de nenhum número) é 1.

Agora é só trabalhar, não vale ver as respostas!!!!

*/

function fatorialVersao1(n:number): number {
  let fat = 1;
  if (n >= 2) {
    for (let i = 1; i <= n; i += 1) {
      fat *= i;
    }
  } else {
    return 0;
  }
  return fat;
}

// console.log(fatorialVersao1(9));

function fatorialVersao2(n:number): number {
  let fat = 1;
  if (n > 0) {
    fat = n * fatorialVersao2(n - 1);
  }
  return fat;
}

console.log(fatorialVersao2(6));
