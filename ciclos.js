// Ciclos -- Loop -- Bucle

// for - while - do while

// for --> inicialización ;  condicion ;  modificador

const probandoFor = () => {

    for( let i = 1; i <= 5; i++){

        console.log("Hola, como estas?")

    }
}

probandoFor()

const sumatoria = () => {

    let count = 0
    
    for(let i = 1; i <= 10; i++){

        count += i
    }

    return count
}

let resultado =  sumatoria()
console.log(resultado)

let n = 53

// quiero saber si un numero es par
console.log(n % 2 === 0)

// quiero saber si el numero es impar
console.log(n % 2 !== 0)

const sumatoriaImpar = (numInicial, numFinal) => {

    let count = 0
    
    for(let i = numInicial; i <= numFinal; i++){

        if(i % 2 !== 0){
            count = count + i
        }
    }

    return count
}

let resultadoImpar = sumatoriaImpar(1,4)

console.log(resultadoImpar)

const tablaDeMultiplicar = (numero) => {
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} * ${i} = ${numero * i}`)
        //console.log(numero + " * " + i + " = " + numero * i)
    }
}

tablaDeMultiplicar(3)

let i = 1
while (i <+ 10) {
    console.log(i)
    i++
}