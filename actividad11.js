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
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {titular: "Ethel Leon",
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

// Obtener la cuenta con el titular de la misma más joven.

const cuentaMasJoven = (array) => {

    let edadMasJoven = array[0].edadTitular
    let arrayMasJoven = []
    for (let i = 1; i < array.length; i++) {
        if(edadMasJoven > array[i].edadTitular){
            edadMasJoven = array[i].edadTitular
            arrayMasJoven = array[i]
        }
    }
    return arrayMasJoven
}

let resultadoJoven = cuentaMasJoven(arrayCuentas)
console.log("\nCuenta más joven:\n")
console.log(resultadoJoven)

// Obtener un array con las cuentas habilitadas

const cuentaHabilitada = (array) => {

    let arrayCuentahabilitada = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].estaHabilitada === true){
            arrayCuentahabilitada.push(array[i])
        }
    }
    return arrayCuentahabilitada
}

let resultadoCuentaHabilitada = cuentaHabilitada(arrayCuentas)
console.log("\nCuentas Habilitadas:\n")
console.log(resultadoCuentaHabilitada)

// Obtener un array con las cuentas deshabilitadas

const cuentasDeshabilitadas = (array) => {

    let arrayCuentasDeshabilitadas = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].estaHabilitada !== true){
            arrayCuentasDeshabilitadas.push(array[i])
        }
    }
    return arrayCuentasDeshabilitadas
}

let resultadoCuentasDeshabilitadas = cuentasDeshabilitadas(arrayCuentas)
console.log("\nCuentas Deshabilitadas:\n")
console.log(resultadoCuentasDeshabilitadas)

// Obtener la cuenta con el menor saldo.

const cuentaMenorSaldo = (array) => {

  let menorSaldo = array[0].saldo
  let arrayMenorSaldo = []
  for (let i = 1; i < array.length; i++) {
      if(menorSaldo > array[i].saldo){
          menorSaldo = array[i].saldo
          arrayMenorSaldo = array[i]
      }
  }
  return arrayMenorSaldo
}

let resultadoCuentaMenorSaldo = cuentaMenorSaldo(arrayCuentas)
console.log("\nCuenta con menor saldo:\n")
console.log(resultadoCuentaMenorSaldo)

// Obtener la cuenta con el mayor saldo

const cuentaMayororSaldo = (array) => {

  let mayorSaldo = array[0].saldo
  let arrayMayorSaldo = []
  for (let i = 1; i < array.length; i++) {
      if(mayorSaldo < array[i].saldo){
          mayorSaldo = array[i].saldo
          arrayMayorSaldo = array[i]
      }
  }
  return arrayMayorSaldo
}

let resultadoCuentaMayorSaldo = cuentaMayororSaldo(arrayCuentas)
console.log("\nCuenta con mayor saldo:\n")
console.log(resultadoCuentaMayorSaldo)