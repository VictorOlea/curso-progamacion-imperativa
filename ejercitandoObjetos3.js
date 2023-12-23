let productos = [
    {
      nombre: "motorola",
      precio: 40,
      cantidad: 5,
      categoria: "telefonia",
    },
    {
      nombre: "notebook",
      precio: 80,
      cantidad: 10,
      categoria: "computacion",
    },
    {
      nombre: "zapatilla",
      precio: 20,
      cantidad: 2,
      categoria: "indumentaria",
    },
    {
      nombre: "Macbook",
      precio: 100,
      cantidad: 7,
      categoria: "computacion",
    },
    {
      nombre: "samsung",
      precio: 60,
      cantidad: 15,
      categoria: "telefonia",
    },
    {
      nombre: "monitor",
      precio: 30,
      cantidad: 5,
      categoria: "computacion",
    },
  ];
  
  // TODO ---> Simulacion frontend E-commerce
  
  /* 
      1)Las personas encargadas del backend nos enviaron una lista de productos pero 
          se olvidaron de asignarles un ID unico para cada producto,
          nuestra tarea es agregarles ese ID unico a cada uno
          Requisito: debe empezar en 1 y ser secuencial 
      2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
          si se venden todos los productos que tenemos en stock
      3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
          X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
      4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
      especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
      multiplicar dicho precio
    */

const generarId = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i].id = i +1
    }
}

generarId(productos)
console.log(productos)

const determinarTotal = (array) => {
    let subtotal = 0
    for (let i = 0; i < array.length; i++) {
        subtotal += array[i].precio * array[i].cantidad
    }
    return subtotal
}

let total = determinarTotal(productos)
console.log(total)

const filtrador = (array, nombreCategoria) => {
    nombreCategoria = nombreCategoria.toLowerCase()
    let arrayFiltrado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].categoria === nombreCategoria){
            arrayFiltrado.push(array[i])
        }
    }
    return arrayFiltrado
}

let filtrado = filtrador(productos, "Computacion")
console.log(filtrado)

const aumentaPorCategoria = (array, categoria, incremento) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].categoria === categoria) {
            array[i].precio *= incremento
        }
    }
}

aumentaPorCategoria(productos, "computacion", 1.20)
console.log(productos)