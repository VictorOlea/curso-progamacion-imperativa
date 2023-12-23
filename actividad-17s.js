/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    ]

console.log(matriz)
console.table(matriz)
/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

const sumarElementos = (matriz) => {
    acc = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j]
        }
    }
    return acc
}

let resSumarElementos = sumarElementos(matriz)
console.log(resSumarElementos)

// Completa la función para que retorne una matriz
// de 10x10

function generarMatriz10por10() {
    contador = 1
	let matrizGenerada = []
    for (let i = 0; i < 10; i++) {
        matrizGenerada.push([])
        for (let j = 0; j < 10; j++) {
            matrizGenerada[i].push(contador)
            contador += 1
        }
    }
    return matrizGenerada
}

let matriz10por10 = generarMatriz10por10();
console.log(matriz10por10);
console.table(matriz10por10);

const sumaDiagonalPrincipal = (matriz) => {
    acc = 0
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][i]
    }
    return acc
}

let resSumaDiagonalPrincipal = sumaDiagonalPrincipal(matriz10por10)
console.log("Rojo: ",resSumaDiagonalPrincipal)

const sumaDiagonalSecundaria = (matriz) => {
    acc = 0
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][matriz.length - 1 - i]
    }
    return acc
}

let resSumaDiagonalSecundaria = sumaDiagonalSecundaria(matriz10por10)
console.log("Verde: ",resSumaDiagonalSecundaria)

const matriz_10_x_10 = int_matriz_cuadra => {
    matriz_generada = []
    valor_matriz = 0;
    for (let i = 0; i < int_matriz_cuadra; i++) {
        filas = []
        for (let j = 0; j < int_matriz_cuadra; j++) {
            valor_matriz ++;
            filas.push(valor_matriz);
        }
        matriz_generada.push(filas);
    }
    return matriz_generada;
}

let matriz_final = matriz_10_x_10(10);
console.log(matriz_final)
console.table(matriz_final)