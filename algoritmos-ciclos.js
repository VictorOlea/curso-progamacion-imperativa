let num1 = 2
let num2 = 3
let num3 = 3

if (num1 > num2 && num1 > num3) {
    console.log(num1)
}else if(num2 > num1 && num2 > num3){
    console.log(num2)
}else{
    console.log(num3)
}

let butacasCine = [
    ['ocupado', 'libre', 'libre', 'libre'],
    ['libre', 'libre', 'libre', 'libre'],
    ['libre', 'libre', 'ocupado', 'ocupado'],
    ['ocupado', 'ocupado', 'ocupado', 'ocupado'],
    ['libre', 'libre', 'libre', 'libre']
]


//Recorriendo fila por fila
// for(let fila = 0; fila < butacasCine.length; fila++) {
//     for (let col = 0; col < butacasCine[fila].length; col++) {
//         console.log(butacasCine[fila][col])
//     }
// }

// Recorriendo columna por columna
// for (let col = 0; col < butacasCine[0].length; col++) {
//     for (let fila = 0; fila < butacasCine.length; fila++) {
//         console.log(butacasCine[fila][col])
//     }
//     console.log(" ")
// }

// funcion recorre por fila
const recorreFila = (matriz) => {
    for (let fila = 0; fila < matriz.length; fila++) {
        console.log("Fila:",fila)
        for (let col = 0; col < matriz[fila].length; col++) {
            console.log(matriz[fila][col])
        }
    }
} 

recorreFila(butacasCine)

const recorreColumna = (matriz) => {
    for (let col = 0; col < matriz[0].length; col++) {
        console.log("Columna:",col)
        for (let fila = 0; fila < matriz.length; fila++) {
            console.log(matriz[fila][col])
        }
    }
}

recorreColumna(butacasCine)

const butacasVacias = (matriz) => {
    let matrizButacasVacias = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let col = 0; col < matriz[fila].length; col++) {
            if (matriz[fila][col] === "libre") {
                matrizButacasVacias[fila][col] = "libre"
            } else {
                matrizButacasVacias[fila][col] = "0"
            }
        }
    }
    return matrizButacasVacias
}

console.log(butacasVacias(butacasCine))

// Calcula la dimensión de una matriz
const dimensionMatriz = (matriz) => {
    let filas = 0
    let columnas = 0
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let col = 0; col < matriz[fila].length; col++) {
            columnas = col + 1
        }
        filas = fila + 1
    }
    return { filas, columnas } 
}

let matrizDimension = dimensionMatriz(butacasCine)
console.log(matrizDimension)
console.log("Filas:",matrizDimension.filas)
console.log("Columnas:",matrizDimension.columnas)

// Crea una matriz recibiendo sus dimensiones

const creaMatriz = (filas, columnas) => {
    let matrizGenerada = []
    for (let i = 0; i < filas; i++) {
        matrizGenerada.push([])
        for (let j = 0; j < columnas; j++) {
            matrizGenerada[i].push("*")
        }
    }
    return matrizGenerada
}

let matrizPar =
[
    [ 2, 1, 3, 4 ],
    [ 2, 1, 7, 8 ],
    [ 2, 1, 11, 12 ],
    [ 2, 1, 15, 16 ],
    [ 2, 1, 19, 20 ]
]

const modificaMatriz = (matriz) => {
    let matrizDim = dimensionMatriz(matriz)
    let filas = matrizDim.filas
    let columnas = matrizDim.columnas
    let matrizGenerada = []
    for (let i = 0; i < filas; i++) {
        matrizGenerada.push([])
        for (let j = 0; j < columnas; j++) {
            if(matriz[i][j] % 2 === 0){
                matrizGenerada[i].push("par")
            }else{
                matrizGenerada[i].push("impar")
            }
        }
    }
    return matrizGenerada
}

let matriztest = []
console.log(matriztest.length)
matriztest.push([],[])
console.log(matriztest)
matriztest[0].push(0)
console.log(matriztest)
matriztest[0].push(1)
console.log(matriztest)

console.log(creaMatriz(6,5))

//console.log(modificaMatriz(butacasCine))
console.log(modificaMatriz(matrizPar))

//console.log(matrizPar)