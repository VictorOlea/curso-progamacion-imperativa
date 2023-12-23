// A partir de él siguiente array de edades nos solicitan realizar lo siguiente


const edades = [33, 27, 34, 30, 34, 25];

//Desarrollar una función que ordene internamente de forma ascendente las edades, 
//la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado 
//como él siguiente.
//[25, 27, 30, 33, 34, 34]

const bubbleSortAsc = arr => {

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

console.log("Ordenamiento Ascendente")
bubbleSortAsc(edades)
console.log(edades)

//Desarrollar una función que ordene internamente de forma descendente las edades, 
//la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado 
//como él siguiente.
//[34, 34, 33, 30, 27, 25]

const bubbleSortDes = arr => {

    let caja = undefined

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                caja = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = caja
            }
            
        }
    }
}
console.log("Ordenamiento Descendente")
bubbleSortDes(edades)
console.log(edades)

//2. Dado un array de strings:
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

//¿Cómo pudieras ordenar el array anterior, alfabéticamente?
// Con el método de ordenamiento bubble sort, el cual tambien puede ordenar letras.
console.log("Ordenamiento Alfabetico")
bubbleSortAsc(letras)
console.log(letras)

//3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:
const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

//a. Desarrollar una función que ordene internamente de forma ascendente según él saldo 
//de cada cuenta, la misma deberá retornar él array ordenado.

const bubbleSortObjAscSaldo = (arr) => {

    let aux = undefined

    for( let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < arr.length - 1; j++ ){
            if( arr[j].saldo > arr[j + 1].saldo ){ 
                aux = arr[j] 
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}

console.log("Ordenamiento Ascendente por Saldo")
bubbleSortObjAscSaldo(arrayCuentas)
console.log(arrayCuentas)


//b. Desarrollar una función que ordene internamente de forma ascendente según la edad 
//del titular de cada cuenta, la misma deberá retornar él array ordenado.

const bubbleSortObjAscEdad = (arr) => {

    let aux = undefined

    for( let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < arr.length - 1; j++ ){
            if( arr[j].edadTitular > arr[j + 1].edadTitular ){ 
                aux = arr[j] 
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}

console.log("Ordenamiento Ascendente por Edad")
bubbleSortObjAscEdad(arrayCuentas)
console.log(arrayCuentas)