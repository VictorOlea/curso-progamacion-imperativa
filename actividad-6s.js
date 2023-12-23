let edad = 22

if (edad < 0 ) {
    console.log("Error, edad inválida. Por Favor ingrese un número válido")
}
else if (edad < 18) {
    console.log("No puede pasar al bar. ")
} else if (edad < 21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol. ")
} else {
    console.log("Puede pasar al bar y tomar alcohol")
    console.log("Felicitaciones por llegar a la mayoría de edad!!!")
}

// 

// function totalAPagar(vehiculo, litrosConsumidos) {
//     if (vehiculo == "coche") {
//         if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
//             return litrosConsumidos * 86 + 50
//         }
//         else if (litrosConsumidos > 25) {
//             return litrosConsumidos * 86 + 25
//         }
//         else {
//             return "error en la cantidad ingresada"
//         }
//     }
//     else if (vehiculo == "moto") {
//         if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
//             return litrosConsumidos * 70 + 50
//         }
//         else if (litrosConsumidos > 25) {
//             return litrosConsumidos * 70 + 25
//         }
//         else {
//             return "error en la cantidad ingresada"
//         }
//     }
//     else if (vehiculo == "autobús") {
//         if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
//             return litrosConsumidos * 55 + 50
//         }
//         else if (litrosConsumidos > 25) {
//             return litrosConsumidos * 55 + 25
//         }
//         else {
//             return "error en la cantidad ingresada"
//         }
//     }
// }

function totalAPagar(vehiculo, litrosConsumidos) {
    if (vehiculo == "coche") {
        subtotal = litrosConsumidos * 86
    }
    else if (vehiculo == "moto") {
        subtotal = litrosConsumidos * 70
    }
    else if (vehiculo == "autobús") {
        subtotal = litrosConsumidos * 55
    } 
    else {
        return "error en el ingreso"
    }

    if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
        return subtotal + 50
    }
    else if (litrosConsumidos > 25) {
        return subtotal + 25
    }
    else {
        return "error en la cantidad ingresada"
    }
}

let vehiculo = "coche"
// let vehiculo = "moto"
// let vehiculo = "autobús"

let litrosConsumidos = 20

console.log(totalAPagar(vehiculo, litrosConsumidos))

// Local de sándwiches

const sandwichAPagar = (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza)  => {
    // Base
    if (base == "pollo") {
        subtotal = 150
    }
    else if (base == "carne") {
        subtotal = 200
    }
    else {
        subtotal = 100
    }
    // Pan
    if (pan == "blanco") {
        subtotal = subtotal + 50
    }
    else if (pan == "negro") {
        subtotal = subtotal + 60
    }
    else {
        subtotal = subtotal + 75
    }
    // Ingredientes
    if (queso == true) {
        subtotal = subtotal + 20
    }
    if (tomate == true) {
        subtotal = subtotal + 15
    }
    if (lechuga == true) {
        subtotal = subtotal + 10
    }
    if (cebolla == true) {
        subtotal = subtotal + 15
    }
    if (mayonesa == true) {
        subtotal = subtotal + 5
    }
    if (mostaza == true) {
        subtotal = subtotal + 5
    }
    else {
        return "error"
    }

    return subtotal
}

let base = "pollo", pan = "blanco", queso = true, tomate = true, lechuga = true, cebolla = true, mayonesa = true, mostaza = true // 270

console.log(sandwichAPagar(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza))

let random = Math.floor(Math.random() * 11);
console.log(random)

const verificar = (numero) => {
    let numSecreto = Math.floor(Math.random() * 10);
    if (numero === numSecreto) {
      return "¡Felicidades!";
    } else {
      return `La proxima sera, ingresaste el numero: ${numero} y el numero secreto era: ${numSecreto}`;
    }
  };
  
console.log(verificar(5));

const abrirParacaidas = (velocidad, altura) => {
  if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
    return "El paracaidas se abrio";
  } else {
    return "El paracaidas no se abrio";
  }
};

console.log(abrirParacaidas(500, 2500));

const traductor = (palabra) => {
  switch (palabra) {
    case "casa":
      return "house";
    case "perro":
      return "dog";
    case "pelota":
      return "ball";
    case "árbol":
      return "tree";
    case "genio":
      return "genius";
    default:
      return "La palabra ingresada es incorrecta";
  }
};

console.log(traductor("perro"));

const valoracion = (valor) => {
  switch (valor) {
    case "Muy mala":
      return "Calificaste la película como Muy Mala. Lo lamentamos mucho.";
    case "Mala":
      return "Calificaste la película como Mala. Lo lamentamos.";
    case "Mediocre":
      return "Calificaste la película como Mediocre. Lo sentimos.";
    case "Buena":
      return "Calificaste la película como Buena. Nos alegramos.";
    case "Muy buena":
      return "Calificaste la película como Muy buena. Nos alegramos mucho.";
    default:
      return "Ingresaste un valor inválido.";
  }
};

console.log(valoracion("Buena"));
console.log("Gracias por su visita!");