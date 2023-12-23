// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y 
// haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración sumado con el número pasado por parámetro 
// sea par, mostrará en la consola: “El número X es par”.

const loopDePares = (num) => {
    for(let i = 0; i<=100; i++){
        let suma = i + num
        if(suma%2 == 0 && suma <= 100){
            console.log("el número: " + suma + " es par")
        }
    }
}

loopDePares(5)

// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetros un número 
// y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop.
// Luego, modificar el código para que, en caso de que ese número sumado con el número 
// pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.


const loopDeImpares = (num, palabra) => {
    for(let i = 0; i<=100; i++){
        let suma = i + num
        if(suma%2 == 1 && suma <= 100){
            console.log("el número: " + suma + " es impar, " + palabra )
        }
    }
}

loopDeImpares(2, "algo")

// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y 
// que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. 
// Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)

const sumatoria = (num) => {
    let acc = 0
    for(i = 1; i <= num; i++){
        acc += i
    }
    return acc
}

console.log(sumatoria(8))

// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y 
// que devuelva un nuevo arreglo con tantos elementos como el número que le hayas 
// pasado. 
// Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

const nuevoArreglo = (num) => {
    let arreglo = []
    for(i = 1; i <= num; i++){
        arreglo.push(i)
    }
    return arreglo
}

console.log(nuevoArreglo(8))

// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el 
// comportamiento de la función original. Si no estás seguro de cómo funciona, 
// Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

const split = (palabra) => {
    let arreglo = []
    for(i = 0; i <= palabra.length; i++){
        arreglo += palabra[i]
    }
    return arreglo
}

console.log(split("Hola"))