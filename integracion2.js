// Integración 2, Fecha: 14-11-2023

// Realizar una función que reciba por

const verificar = (num, bool) => {

    if ( num % 2 === 0 && bool === true) {
        return "ha pasado la condición"
    }else if ( num % 2 !== 0 && bool === false){
        return "no ha pasado la condición"
    }else{
        return -1
    }
}

let resultado = verificar(32, true)
console.log(resultado)

let numeros = [5, 4, 2, 7, 9, 2, 3]

const determinarMenor = (array) =>{

    let menor = array[0]

    for (let i = 0; i < array.length; i++) {
        
        if (menor > array[i]){

            menor = array[i]
        }
    }

    return menor
}

let buscaMenor = determinarMenor(numeros)
console.log(buscaMenor)
