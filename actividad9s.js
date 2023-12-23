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
  // podes continuar tu codigo a partir de aca!

  const banco = {
    clientes: arrayCuentas,

    consultarCliente: function (titular){
        const titularPrueba = titular.toLowerCase();
        for(let i= 0; i<banco.clientes.length; i++){
            if(banco.clientes[i].titularCuenta.toLowerCase() === titularPrueba){
                return banco.clientes[i];
            }
        }
    },

    deposito: function(titular, montoDeposito){
        const cliente = this.consultarCliente(titular)
        if(cliente){
            cliente.saldoEnPesos += montoDeposito
            console.log("Deposito realizado" + cliente.saldoEnPesos)
        }
    }
};

const cliente = banco.consultarCliente("jarret lafuente")
console.log(cliente);

banco.deposito("jarret lafuente", 1000)


