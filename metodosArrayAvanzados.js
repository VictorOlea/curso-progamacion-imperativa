let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 5,
      titularCuenta: "pepito",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 3,
      titularCuenta: "maria",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 7,
      titularCuenta: "juancito",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 1,
      titularCuenta: "carmen",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 12,
      titularCuenta: "Jack",
    },
]

// Find ---> me pide una condición y me devuelve el elemento encontrado
let cliente = arrayCuentas.find(elemento => elemento.titularCuenta === 'Jack')
console.log(cliente)

// Filter ---> Siempre devuelve un nuevo arreglo y pide una condición
let arregloFiltrado = arrayCuentas.filter((elemento, indice) => elemento.saldoEnPesos < 5)
console.log(arregloFiltrado)

// Map ---. devuelve un nuevo arreglo de la misma longitud que el original
let numeros = [6, 2, 3, 5, 8, 1, 9, 1, 2, 3]

let mapeo = numeros.map((numero) => {return numero * 3})
console.log(mapeo)

let arrayMapeado = arrayCuentas.map((cuenta) => {
    return {saldoEnPesos: cuenta.saldoEnPesos, titularCuenta: cuenta.titularCuenta}
})

console.log(arrayMapeado)

// Foreach ---> recorre el array y ejecuta instrucciones, no devuelve nada
arrayCuentas.forEach((cuenta, idx) => cuenta.id = idx + 1)
console.log(arrayCuentas)

// Ordenamiento
numeros.sort((a, b) => b - a)
console.log(numeros)

arrayCuentas.sort((a, b) => b.saldoEnPesos - a.saldoEnPesos)
console.log(arrayCuentas)