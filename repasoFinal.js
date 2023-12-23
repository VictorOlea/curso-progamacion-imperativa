



const filtrador = (arr) => {
    let arrayFiltrado = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].stock < 10) {
            arrayFiltrado.push(arr[i])
        }
    }
    return arrayFiltrado
}

let res = filtrador(items)
console.log(res)

// Ordenar el arreglo de forma descendente

let edades = [2, 12, 1, 5, 32, 56, 7]

const bubble = (arr) => {
    let aux
    for (let i = 0; i < arr.length; i++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[j] < arr[j + 1]) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}

bubble(edades)
console.log(edades)

let matriz1 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9]
]

// Un solo ciclo
// Crear una función que retorne un nuevo arreglo
// Con todos los elementos de la fila 2(multiplicados x 3)

const fila = (mat) => {

    let filax3 = []
    for (let i = 0; i < mat[1].length; i++) {
        filax3.push(mat[1][i] * 3)
    }
    return arr
}

let resultado = fila(matriz1)
console.log(resultado)

let matriz2 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9]
]

// Crear una función que modifique los elementos impares de la
// columna 0, por un numero cero

const columna = mat => {

    for (let i = 0; i < mat.length; i++) {
        if (mat[i][0] !== undefined && mat[i][0] % 2 !==0) {
            mat[i][0] = 0
        }
    }
}

columna(matriz2)
console.table(matriz2)

let matriz3 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9]
]

// Doble for
// Cambiar todos los elementos de la matriz por su negativo

const matrizCompleta = mat => {

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            mat[i][j] *= (-1) 
        }
    }
}

// En el dia que mas se gasto, cuanto fue?
// En que dia y semana, se produjo es gasto

const mayorGasto = mat => {

    let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
    let mayor = mat[0][0]
    let dia = 0
    let semana = 0

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if(mayor < mat[i][j]){
                mayor = mat[i][j]
                dia = j
                semana = i 
            }
        } 
    }
    semana += 1
    dia += 1
    return {mayor, dia, semana}
}

let obj = mayorGasto(mat)
console.log(`El dia que mas se gasto fue ${obj.dia}`)