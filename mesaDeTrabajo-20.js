//Ejercicio 1
//En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
//likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
//los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
//obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
//que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let likes = [12, 2, 25, 10, 40, 22, 35, 25, 80, 40, 100, 45, 24, 55, 67]

const ordenaLikes = arr => {

    let aux = undefined

    for( let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < arr.length - 1; j++ ){
            if( arr[j] < arr[j + 1]){ 
                aux = arr[j] 
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}

ordenaLikes(likes)
console.log(likes)


//Ejercicio 2
//El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
//objeto temperatura donde registra día —valor numérico del día—, mes —valor
//numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
//día. Las temperaturas —objeto temperatura— están cargados en un array.

const temperaturas = 
    [
        {
            dia: 1,
            mes: 1,
            temMax: 30,
            temMin: 20
        },
        {
            dia: 2,
            mes: 2,
            temMax: 20,
            temMin: 10
        },
        {
            dia: 15,
            mes: 3,
            temMax: 40,
            temMin: 5
        },
        {
            dia: 22,
            mes: 4,
            temMax: 18,
            temMin: 4
        },
        {
            dia: 16,
            mes: 5,
            temMax: 19,
            temMin: 10
        },
        {
            dia: 20,
            mes: 6,
            temMax: 19,
            temMin: 8
        },
        {
            dia: 6,
            mes: 7,
            temMax: 26,
            temMin: 12
        },
        {
            dia: 16,
            mes: 8,
            temMax: 22,
            temMin: 9
        },
        {
            dia: 25,
            mes: 9,
            temMax: 33,
            temMin: 20
        },
        {
            dia: 13,
            mes: 10,
            temMax: 30,
            temMin: 14
        },
        {
            dia: 1,
            mes: 11,
            temMax: 31,
            temMin: 12
        },
        {
            dia: 20,
            mes: 12,
            temMax: 32,
            temMin: 20
        }
]

//a) Ordenar por temperatura mínima de menor a mayor.

const tempMinOrdenada = (arr) => {

    let aux = undefined

    for( let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < arr.length - 1; j++ ){
            if( arr[j].temMin > arr[j + 1].temMin ){ 
                aux = arr[j] 
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}

console.log("Ordenar temperatura minima de menor a mayor")
tempMinOrdenada(temperaturas)
console.log(temperaturas)

//b) Ordenar por temperatura máxima de mayor a menor.

const tempMaxOrdenada = (arr) => {

    let aux = undefined

    for( let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < arr.length - 1; j++ ){
            if( arr[j].temMax < arr[j + 1].temMax ){ 
                aux = arr[j] 
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}

console.log("Ordenar temperatura maxima de mayor a menor")
tempMaxOrdenada(temperaturas)
console.log(temperaturas)