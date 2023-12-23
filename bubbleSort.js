// Algoritmo de ordenamiento

let numeros = [5, 2, 6, 1, 5]

const bubbleSort = arr => {

    let caja = undefined

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                caja = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = caja
            }
            
        }
    }
}

bubbleSort(numeros)
console.log(numeros)

let palabras = ["casa", "avion", "zoo", "mariposa"]

bubbleSort(palabras)
console.log(palabras)