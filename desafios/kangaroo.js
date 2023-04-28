
function kangaroo(x1, v1, x2, v2) {
   if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
    return 'NO';
   } // verifica se um canguru está à frente do outro e tem um salto maior
   if ((x2 - x1) % (v2 - v1) === 0) {
    return 'YES';
   } else {
    return 'NO';
   } //se a diferença entre as posições iniciais é divisível pela diferença entre as distâncias dos saltos. Se todas essas condições forem verdadeiras, a função retorna "YES", caso contrário, ela retorna "NO"
};

console.log(kangaroo(1, 2, 2, 1));
