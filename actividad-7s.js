const imprimeLos10Siguientes = (numero) =>{
    for (let index = 0; index < 10; index++) {
        console.log(numero + index+1);
    }
}

imprimeLos10Siguientes(5)

const imprimeEntreEl5y20 = () =>{
    for (let index = 5; index <= 20; index = index + 3){
        console.log(index)
    }
}

imprimeEntreEl5y20()

const sumatoria0a100 = () => {
    let total = 0
    for (let index = 0; index <= 100; index++) {
        total = total + index
    }
    return total
}

console.log(sumatoria0a100())

const factorial = (numero) => {
    let total = 1
    for (let index = 1; index <= numero; index++){
        total = total * index
    }
    return total
}

console.log(factorial(5))

const fibonacci = (numero) => {
    parcial = 0
    total = 0
    for (let index = 0; index <= numero; index++){
        parcial = parcial + index
        total = total + parcial
        console.log(parcial)
        console.log(total)
    }
}

fibonacci(5)

const odioElFiboMAS = (n) => {
    let contadorUno = 1;
    let contadorDos = 1;
    let resultado = 0;
  
    //aca no se que se quiere que sea <= a n o solo <
    for (let i = 0; i <= n; i++) {
      console.log("resultado intermedio", resultado); // muesto el valor actual de 'resultado' que empieza en 0
      resultado = contadorUno;
      contadorUno = contadorDos;
      contadorDos = resultado + contadorUno;
    }
  };
  
  odioElFiboMAS(6);