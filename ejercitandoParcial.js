// Array

let numeros = [1,2,3,4,5]

let letras = ["a", "b", "c", "d", "e"]

const paises = ["Argentina", "Brazil", "Bolivia", "Chile", "Colombia", "Mexico", "uruguay"]

let largoNumeros = numeros.length
console.log(`El largo del array numeros es ${largoNumeros}`)

console.log(`El item 0 del array letras es ${letras[0]}`)


// 
const itemArray = (array) => {
    let element = 0
    for (let i = 0; i <= array.length - 1; i++) {
        element = array[i]
        console.log(`el item ${element} del array esta en la posición ${i}`) 
    }
}

itemArray(letras)
console.log("")
itemArray(paises)

console.log(letras.indexOf('c'))
console.log(letras.includes("d"))

letras.push("f")
console.log(letras);

console.log(paises.pop())
console.log(paises)

let separados = paises.join("/")
console.log(separados)
console.log(separados.length)
let separadosLetras = letras.join("/")
console.log(separadosLetras)
console.log(separadosLetras.length)

const arrayToLowerCase = (array) => {
    let arrayMinusculas = []
    for (let i = 0; i < array.length; i++) {
        arrayMinusculas.push(array[i].toLowerCase())
    }
    return arrayMinusculas
}

const arrayToUpperCase = (array) => {
    let arrayMayusculas = []
    for (let i = 0; i < array.length; i++) {
        arrayMayusculas.push(array[i].toUpperCase())
    }
    return arrayMayusculas
}

const buscaItemArray = (array, palabra) => {
    arrayTrabajo = arrayToLowerCase(array)
    palabraTrabajo = palabra.toLowerCase()
    item = arrayTrabajo.indexOf(palabraTrabajo)
    if (item != -1) {
        return "el elemento se encuetra en la posicion " + item + " del array"
    } else{
        return "elemento no encontrado"
    }
}

let encuetraItem = buscaItemArray(paises, "Mexico")
console.log(encuetraItem)

let prueba = arrayToLowerCase(paises)
console.log(prueba)

let prueba2 = arrayToUpperCase(paises)
console.log(prueba2)

const invertirArray = (array) => {

    let arrayInvertido = []
    let largoArray = array.length
    for (let i = 0; i < largoArray; i++) {
        arrayInvertido.push(array.pop())
    }
    return arrayInvertido
}

let invierteArray = invertirArray(letras)
console.log(invierteArray)

let inviertePais = invertirArray(paises)
console.log(inviertePais)