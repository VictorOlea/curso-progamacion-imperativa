// Final
    // 1 ---> previo al parcial
    // 2 ---> bubble sort
    // 3 ---> matrices a - b

// Matrices

let matriz = [[1, 2, 4], [4, 1, 6], [7, 4, 2]]

let arr  = ["das", true, 123]

console.log(matriz[2][1])


// Filas y Columnas

let matrix = [
    [1, 2, 4],
    [4, 1, 6],
    [7, 4, 2]
]

console.log(matrix[2][1])

console.table(matrix)

// Recorrer
// recorre fila determinada
const recorreFila = (mat) => {
    for (let i = 0; i < mat[2].length; i++) {
        console.log(mat[2][i])
        
    }
}

// recorre columna determinada
const recorreCol = (mat) => {
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i][2])
    }
}

// Recorrer la matriz completa ---> doble ciclo for
const recorreCompleta = mat => {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            mat[i][j]
        }
    }
}


// Cuando la matriz es cuadrada (mismas filas x columnas y esta completa)
// Recorre la diagonal principal
const recorrePrincipal = (mat) => {
    for (let i = 0; i < mat.length; i++) {
        mat[i][i]
    }
}

// Recorre la diagonal secundaria
const  recorreSecundaria = (mat) => {
    for (let i = 0; i < mat.length; i++) {
        mat[i][mat.length - 1 - i]
    }
}

// Total gastado semana

const totalSemana = (mes, numSemana) => {

    let posicionSemana = numSemana - 1
    let contador = 0
    for (let i = 0; i < mes[posicionSemana].length; i++) {
        contador += mes[posicionSemana][i]
    } 
    return contador
}


// Total gasto por dia

const totalGastosDia = (mes, numDia) => {
    let posicionDia = numDia - 1
    let acc = 0
    for (let i = 0; i < mes.length; i++) {
        acc += mes[i][posicionDia]
    }
    return acc
}

// Total gastado del mes

const totalMensual = (mes) => {
    acc = 0
    for (let i = 0; i < mes.length; i++) {
        for (let j = 0; j < mes[i].length; j++) {
            acc += mes[i][j]
        }
    }
    return acc
}

