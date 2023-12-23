const restarPares = (num1, num2) => {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return num1 - num2;
  } else {
    return "Lo siento, uno o mas parámetros no son pares";
  }
};

let resultadoRestarPares = restarPares(8, 2);
console.log(resultadoRestarPares);

const controlAcceso = (edad, ticket) => {
  if (ticket === true && edad >= 18) {
    return true;
  } else if (ticket === true && edad < 18) {
    return "Sólo puedes acceder con un adulto acompañante";
  } else {
    return false;
  }
};

let resultadoControlAcceso = controlAcceso(18, true);
console.log(resultadoControlAcceso);

let productos = [
  {
    producto: "remera",
    tipo: "indumentaria",
    precio: 2100,
  },
  {
    producto: "notebook",
    tipo: "tecnologia",
    precio: 200000,
  },
  {
    producto: "celular",
    tipo: "tecnologia",
    precio: 27000,
  },
  {
    producto: "protector solar",
    tipo: "cosmetica",
    precio: 2500,
  },
  {
    producto: "pantalon",
    tipo: "indumentaria",
    precio: 7500,
  },
  {
    producto: "tablet",
    tipo: "tecnologia",
    precio: 60000,
  },
];

const filtraTecnologia = (array) => {
  let arrayTecnologia = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].tipo === "tecnologia" && array[i].precio >= 50000) {
      arrayTecnologia.push(array[i]);
    }
  }
  return arrayTecnologia;
};

let filtrandoTecnologia = filtraTecnologia(productos);
console.log(filtrandoTecnologia);
