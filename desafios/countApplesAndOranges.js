let s = 7;
let t = 10;
let a = 4;
let b = 12;
let apples = [2, 3, -4];
let oranges = [3, -2, -4];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let arrApple = [];
    let arrOranges = [];

    for(let i = 0; i <= apples.length; i++) {
      let countApples = a + apples[i];
      if (countApples >= s && countApples <= t) {
        arrApple.push(countApples);
      }
    }

    for(let i = 0; i <= oranges.length; i++) {
        let countOranges = b + oranges[i];
        if (countOranges >= s && countOranges <= t) {
          arrOranges.push(countOranges);
        }
      }
      console.log(arrApple.length);
      console.log(arrOranges.length);


      return '';
};

console.log(countApplesAndOranges(s, t, a, b, apples, oranges));


/* Descrição da função

Conclua a função countApplesAndOranges no editor abaixo. Ele deve imprimir o número de maçãs e laranjas que caíram na casa de Sam, cada uma em uma linha separada.

countApplesAndOranges tem o(s) seguinte(s) parâmetro(s):

s : inteiro, ponto inicial da localização da casa de Sam.
t : inteiro, localização final da localização da casa de Sam.
a : inteiro, localização da macieira.
b : inteiro, localização da laranjeira.
apples : matriz de inteiros, distâncias em que cada maçã cai da árvore.
oranges : matriz de inteiros, distâncias nas quais cada laranja cai da árvore.

Formato de saída

Imprima dois inteiros em duas linhas diferentes:

O primeiro inteiro: o número de maçãs que caem na casa de Sam.
O segundo inteiro: o número de laranjas que caem na casa de Sam.
*/
