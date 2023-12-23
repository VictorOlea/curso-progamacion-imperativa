//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];


// Crear objeto banco

// funcion fuera del objeto

let consultar = function(titular){
  for(let i = 0; i < this.clientes.length; i++) {
    if (this.clientes[i].titularCuenta === titular) {
        return this.clientes[i]
    }
  }
    return "Cliente no encontrado"
}

let depositoFn = function(titular, cantidadDinero){
    let cliente = this.consultarCliente(titular)
    if (typeof cliente === "object") {
      cliente.saldoEnPesos += cantidadDinero
      return `Deposito realizado, su nuevo saldo es ${cliente.saldoEnPesos}`
    }else{
      return "lo siento"
    }
}

let extraccionFn = function(titular, cantidadDinero){
  let cliente = this.consultarCliente(titular)
  if(typeof cliente === "object" && cantidadDinero < cliente.saldoEnPesos){
        cliente.saldoEnPesos -= cantidadDinero
        return `Extraccion realizado, su nuevo saldo es ${cliente.saldoEnPesos}`
  }else{
    return "lo siento"
  }
}



let banco = {
    clientes: arrayCuentas,
    consultarCliente : consultar,
    
    consultarTipoCuenta: function(tipoCuenta){
        let cuentas = []
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].tipoDeCuenta === tipoCuenta) {
                cuentas.push(this.clientes[i])
            }
        }
        return cuentas  
    },

    deposito: depositoFn,

    extraccion: extraccionFn,
}

//console.log(banco)
// buscar cliente por titular 
let clienteEncontrado = banco.consultarCliente("Ramon Connell")
console.log(clienteEncontrado)
// buscar clientes por tipo de cuenta
let buscarCuenta = banco.consultarTipoCuenta("Cuenta Unica")
console.log(buscarCuenta)
// Deposito
let deposintando = banco.deposito("Ramon Connell", 1000)
console.log(deposintando)
// Extraer
let extrayendo = banco.extraccion("Ansel Ardley", 1000)
console.log(extrayendo)