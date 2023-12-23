const autos = [
  {
    marca: "Toyota",
    modelo: 2022,
    color: "rojo",
  },
  {
    marca: "Renault",
    modelo: 2015,
    color: "gris",
  },
  {
    marca: "Peugeot",
    modelo: 2017,
    color: "rojo",
  },
  {
    marca: "Fiat",
    modelo: 2021,
    color: "negro",
  },
];

const filtraModelo = (arr) => {
  let modeloFiltrado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].modelo >= 2020) {
      modeloFiltrado.push(arr[i]);
    }
  }
  return modeloFiltrado;
};

const FiltrandoModelo = filtraModelo(autos);
console.log(FiltrandoModelo);

let estudiantes = [
  {
    nombre: "juan",
    activo: true,
    notaPromedio: 5,
  },
  {
    nombre: "maria",
    activo: false,
    notaPromedio: 3,
  },
  {
    nombre: "florencia",
    activo: true,
    notaPromedio: 9,
  },
  {
    nombre: "carlos",
    activo: false,
    notaPromedio: 8,
  },
  {
    nombre: "jose",
    activo: true,
    notaPromedio: 6,
  },
];

const bubbleSortDescNota = (arr) => {
  let aux;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].notaPromedio < arr[j + 1].notaPromedio) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
};

bubbleSortDescNota(estudiantes);
console.log(estudiantes);

let matrix = [
  [1, 4, 7, 4],
  [5, 7, 6, 2],
  [6, 2, 3, 3],
  [2, 6, 8, 1],
];

const recorreColumna = (mat, col) => {
  let columna = [];
  for (let i = 0; i < mat.length; i++) {
    columna.push(mat[i][col]);
  }
  return columna;
};

const resRecorreColumna = recorreColumna(matrix, 1);
console.log(resRecorreColumna);

const modificaMatImp = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] % 2 !== 0) {
        mat[i][j] = 0;
      }
    }
  }
};

modificaMatImp(matrix);
console.table(matrix);