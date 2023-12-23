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

let depositoFn = function(titular, cantidad){

    let cliente = this.consultarCliente(titular)
    if(typeof cliente === "object"){
        cliente.saldoEnPesos += cantidad
        return `Deposito realizado, su nuevo saldo es ${cliente.saldoEnPesos}`
    }else{
        return "lo siento"
    } 
}

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(titular){

        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].titularCuenta === titular){
                return this.clientes[i]
            }
        }
        return "lo siento, cliente no encontrado"
    },

    deposito: depositoFn
}

let consultaCliente =  banco.consultarCliente("Ansel Ardley")
console.log(consultaCliente)

let depositoCliente = banco.deposito("Ansel Ardle", 10000)
console.log(depositoCliente)