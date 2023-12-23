// Array -- Arreglo  -- coleccion -- lista

let numerosDeLaSuerte = [54, 51, 11, 22, 12, 43]

let mascotas = ['jack', 'lola', 'firulais']

// Posiciones
console.log(mascotas[0])

let palabra = "casa"

console.log(palabra.length)
console.log(numerosDeLaSuerte.length)

let busqueda = "sTar WaRS"

let busquedaExacta = busqueda.toLocaleLowerCase()

console.log(busquedaExacta)

numerosDeLaSuerte.push(29, 77, 65)

console.log(numerosDeLaSuerte)

let cortado = numerosDeLaSuerte.pop()

console.log(cortado)

let nums = [ 4, 12, 3, 5]

let numsInvertidos = []

numsInvertidos.push(nums.pop())
numsInvertidos.push(nums.pop())
numsInvertidos.push(nums.pop()) 
numsInvertidos.push(nums.pop())

console.log(numsInvertidos)

let entradasDeDinero  = [14, 32, 3, 5, 7, 1, 8]

const obtenerTotal = () => {
    let acc = 0

    for(let i = 0; i < entradasDeDinero.length; i++){
        acc += entradasDeDinero[i]
    }
    return acc
}

let resultado = obtenerTotal()

console.log(resultado)

let arr = ["pepe", "maria", "carmen", "juancito"]
let arr2 = ["lola", "jack"]

const convertirMayusculas = (arreglo) => {
    let nuevoArreglo = []

    for(let i = 0; i < arreglo.length; i++){
        nuevoArreglo.push(arreglo[i].toUpperCase())
    }

    return nuevoArreglo
}

let res = convertirMayusculas(arr)
console.log(res)