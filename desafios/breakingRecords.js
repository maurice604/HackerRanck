
// let scores = [10, 5, 20, 20 ,4, 5, 2, 25, 1];

function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let countMin = 0;
    let countMax = 0;
    let res = [2];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            countMin++;
        };
        if (scores[i] > max) {
            max = scores[i];
            countMax++;
        }
    }

    res[0] = countMax;
    res[1] = countMin;

    return res;
}

// console.log(breakingRecords(scores));

/*
Descrição da função

Conclua a função de quebra de registros no editor abaixo.

"breakingRecords" tem o(s) seguinte(s) parâmetro(s):

int scores[n]: pontos marcados por jogo
devoluções

int[2]: Uma matriz com o número de vezes que ela quebrou seus recordes. Índiceé para quebrar a maioria dos recordes de pontos e indexaré para quebrar recordes de pontos mínimos .
Formato de entrada

A primeira linha contém um inteiro, o número de jogos.
A segunda linha contéminteiros separados por espaço descrevendo os respectivos valores de.

Restrições

Exemplo de Entrada 0
9 
10 5 20 20 4 5 2 25 1
Saída de amostra 0
2 4
*/
