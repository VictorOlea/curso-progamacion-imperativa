// Propiedad unica

let array = [
    {
     nombre: "Lean",
     edad: 27
    },
    {
     nombre: "Eze",
     edad: 49
    },
 ]

const propiedadUnica = (array, propiedad) => {
    let nuevoArray = []
    if (propiedad === "edad") {
        for (let i = 0; i < array.length; i++) {
            nuevoArray.push(array[i].edad)
        }
    }
    return nuevoArray
}

let busca = propiedadUnica(array, "edad")
console.log(busca)
console.log(array)

const generarId = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].id = i + 1
    }
}
generarId(array)
console.log(array)