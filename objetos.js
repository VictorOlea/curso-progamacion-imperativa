// Repaso Array

let arrayCorreosPendietes = [
    "ironman@digitalhouse.com",
    "loki%digitalhouse.com",
    "loki@digitalhouse.com",
    "thanosdigitalhouse.com",
    "thanos@digitalHouse.com"
]

let arrayCorreosAdmitidos = []

let arrayCorreosDescartados = []

const verificadoresDeCorreo = (arr) => {

for (let i = 0; i < arr.length; i++) {
        if(arr[i].includes("@")){
            arrayCorreosAdmitidos.push(arr[i])
        }else{
            arrayCorreosDescartados.push(arr[i])
        }
    }

    arrayCorreosPendietes = []
}

verificadoresDeCorreo(arrayCorreosPendietes)

console.log(arrayCorreosPendietes)
console.log(arrayCorreosAdmitidos)
console.log(arrayCorreosDescartados)


// Objetos

const saludarFn = function(){
    return "hola soy " + this.nombre
}

let usuario1 = {
    nombre: "carmen",
    edad: 22,
    direccion: "italia 190",
    saludar: saludarFn,
}

let usuario2 = {
    nombre: "pepe",
    edad: 21,
    direccion: "italia 170",
    saludar: saludarFn,
}

let usuario3 = {
    nombre: "carmen",
    edad: 22,
    direccion: "italia 190",
    saludar: saludarFn,
}

// Modificar
usuario3.edad += 1

// Agregar
usuario3.apellido = "perez"
usuario3.nombre = "maria"

// Eliminar ---> No se usa casi nunca
delete usuario3.direccion

console.log(usuario1.saludar())
console.log(usuario3)

const persona = {
    nombre: "carmen",
    edad: 22,
    direccion: "italia 190",
    saludar: saludarFn,
}

persona.nombre = "nuevo nombre"
persona.nuevaPropiedad = "una nueva"

console.log(persona)

// Esto no!!!
// persona = {
//     nombre: "juan"
// }

// arreglos de objetos

const calcularPromedio = function(){

    let acc = 0
    for (let i = 0; i < this.notas.length; i++){
        acc += this.notas[i]  
    }

    return acc / this.notas.length
}

let estudiantes = [
    {
        nombre: "pepe",
        edad: 12,
        notas: [9, 4, 10],
        promediar: calcularPromedio
    },
    {
        nombre: "maria",
        edad: 15,
        notas: [8, 9, 10],
        promediar: calcularPromedio
    },
    {
        nombre: "juancito",
        edad: 17,
        notas: [10, 9, 10],
        promediar: calcularPromedio
    },
]

console.log(estudiantes[0].promediar())

const funcionParaLaProfesora = (array) =>{

    for (let i = 0; i < array.length; i++) {
        console.log(`el promedio de ${array[i].nombre} es de : ` , array[i].promediar())
        
    }
}

funcionParaLaProfesora()

