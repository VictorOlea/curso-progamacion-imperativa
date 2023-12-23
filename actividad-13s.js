/**
 * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”.
 *
 * Por ejemplo:
 *
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 */

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz", i)
        } else if (i % 3 === 0){
            console.log("Fizz", i)
        } else if (i % 5 === 0) {
            console.log("Buzz", i)
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()

/**
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */
let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

const buscaEnArray = (array, indice) => {
    for (let i = 0; i < array.length; i++) {
        if (i === indice) {
            return array[i]
        }
    }

    return "indice fuera de rango"
}

let busquedaEnArray = buscaEnArray(array, 100)
console.log(busquedaEnArray)

/**
 * Escribir una función que dado un número de mes
 * devuelva la cantidad de días de ese mes
 * (suponiendo que no es un año bisiesto).
 *
 * Por ejemplo, si invocamos la función:
 *
 * diasDelMes(1);
 *
 * Esta debera retornar el numero 31,
 * ya que Enero tiene 31 dias.
 */

// Escribe tu función aquí:
function diasDelMes(numeroMes) {
	if (numeroMes === 2 ) {
        dias = 28
    } else if (numeroMes === 4 || numeroMes === 6 || numeroMes === 9 || numeroMes === 11) {
        dias = 30
    } else {
        dias = 31
    }
    return dias
}

// E invocala:
console.log(diasDelMes(10));
// Por ahora, la función retorna 0.
// Modifica el codigo para que retorne
// los datos correctos.

/**
 * Escribir una función de JavaScript que invierta
 * un número. Por ejemplo, si x = 32443,
 * la salida debería ser 34423.
 */

const invierteNumero = (numero) => {
    let numeroInvertido = 0
    while (numero != 0) {
        numeroInvertido = 10 * numeroInvertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    return numeroInvertido
}

let numeroTest = 1234
console.log(numeroTest % 10)

console.log(invierteNumero(32443))

/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.
 * let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
 */

