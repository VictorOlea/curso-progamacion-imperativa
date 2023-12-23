let likes = [2, 3, 6, 56, 3, 1, 32, 1]

// ordena array de forma desc

const bubbleSorDesc = (array) => {
    let aux
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
}

// bubbleSorDesc(likes)
// console.log(likes)

// ordena de forma asc

const bubbleSortAsc = (array) => {
    let aux
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                aux =  array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
}

// bubbleSortAsc(likes)
// console.log(likes)

// filtrar array según condicion dada

const filtrarArray = (array, condicion) => {
    let arrayFiltrado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= condicion) {
            arrayFiltrado.push(array[i])
            }
        }
        return arrayFiltrado
}

const arrayFiltrado = filtrarArray(likes, 10)
console.log(arrayFiltrado)

let items = [
    {
      nombre: "televisor",
      precio: 500,
      stock: 7,
    },
    {
      nombre: "tablet",
      precio: 350,
      stock: 12,
    },
    {
      nombre: "celular",
      precio: 400,
      stock: 21,
    },
    {
      nombre: "notebook",
      precio: 600,
      stock: 5,
    },
  ];

// ordenando objeto

const bubbleSorDescObj = (array) => {
    let aux
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].precio < array[j+1].precio) {
                aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux
            }
        }
    }
}

bubbleSorDescObj(items)
console.log(items)

// filtrando objeto

const filtrarObj = (array) => {
    let objetoFiltrado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].stock >= 10) {
            objetoFiltrado.push(array[i])
        }
    }
    return objetoFiltrado
}

const objetoFiltrado = filtrarObj(items)
console.log(objetoFiltrado)

// agregando atributo a un objeto

const agregandoAtributo = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i].categoria = "Tecnología"
    }
}

agregandoAtributo(items)
console.log(items)

// agregando atributo a un objeto según condición dada

const agregandoAtributoCond = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].stock <= 10) {
            array[i].flag = "Reposición Urgente"
        }
    }
}

agregandoAtributoCond(items)
console.log(items)

// Matrices

let mat1 = [
    [2, 4, 3],
    [3, 1, 5], // [9, 3, 15]
    [8, 4, 9],
  ];
  
// funcion que retorna un arreglo
// con todos los elementos de la fila de la posicion 1 (multiplicados x 3)

const multx3 = (mat) => {
    let arr = []
    for (let i = 0; i < mat[1].length; i++) {
        arr.push(mat[1][i] * 3)
    }
    return arr
}

const arrayPor3 = multx3(mat1)
console.log(arrayPor3)

let mat2 = [
    [2, 4, 3],
    [3, 1],
    [5, 4, 9],
  ];
  
// función que modifica los elementos impares de una columna
// la columna 0/1/2 por un numero cero

const modificaImparesCol = (mat) => {
    for (let i = 0; i < mat.length; i++) {
        if (mat[i][2] !== undefined && mat[2][0] % 2 !== 0) {
            mat[i][2] = 0
        }
    }
}

modificaImparesCol(mat2)
console.table(mat2)

let mat3 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
  ];
  
  // doble for
  // cambiar todos los elementos de la matriz por su negativo

const modificaMatriz = (mat) => {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length[i]; j++) {
            mat[i][j] *= -1
        }
    }
}

modificaMatriz(mat3)
console.table(mat3)

let febrero = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 31 DIAS
    [1231, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 4500, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 2222, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
  ];
  
  
  
// en el día que más se gasto, cuanto fue ?
// en que día y semana se produjo ese gasto?

const mayorGastoMat = (mat) => {
    let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    let mayor = mat[0][0]
    let dia = 0
    let semana = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mayor < mat[i][j]) {
                mayor = mat[i][j]
                semana = i
                dia = j
                
            }
        }
    }
    semana += 1
    return{mayor, dia: dias[dia], semana}
}

const mayorGasto = mayorGastoMat(febrero)
console.log(mayorGasto)

let mat4 = [
    [2, 4, 6],
    [1, 3, 5],
    [8, 6, 3],
  ];

// recorrer diagonal principal

const recorreDiagonalPrincipal = (mat) => {
    let acc = 0
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i][i])
        acc += mat[i][i]
    }
    return acc
}
const totalDiagonal = recorreDiagonalPrincipal(mat4)
console.log(`El total de la diagonal es ${totalDiagonal}`)

// recorred diagonal secundaria

const recorreDiagonalSecundaria = (mat) => {
    let acc = 0
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i][mat.length -1 - i])
        acc += mat[i][mat.length -1 - i]
    }
    return acc

}

const totalDiagonalSec = recorreDiagonalSecundaria(mat4)
console.log(totalDiagonalSec)