const arrayParaPruebas = [42,
  "Hola",
  7,
  "Gato",
  19,
  56,
  "Perro",
  88,
  33,
  91,
  "Chao",
  14,
  "Manzana",
  25,
  72,
  "Casa",
  10,
  3,
  99,
  "Carro"];

// A.Acceder a elementos específicos de un array.
const valorElementoEspecifico = "Hola"
const posicionElemento = arrayParaPruebas.indexOf(valorElementoEspecifico);
// console.log(arrayParaPruebas[posicionElemento]);
// B.Modificar cada uno de sus elementos e imprimirlos.
let arrayModificado = []
for (let i = 0; i < arrayParaPruebas.length; i++) {
  arrayModificado.push(arrayParaPruebas[i] + " || Ayuda, me modificaron ")
}

// console.log(arrayModificado);
// C.Agregar elementos a un array.
arrayParaPruebas.push("Soy el último elemento");
// console.log(arrayParaPruebas);
// D.Extraer elementos de un array.
//      YA LO HICIMOS! 
// E.Comparar elementos de un array con los elementos de otro.
const arrayDiferente = ["Hola", 7, "Gato", 88, "Manzana", 10, "Casa", 56, 14, "Perro", "Hola", 19, 33, "Zorro", 42, "Árbol", 25, "Pelota", 99, "Carro"];
let contadorCoincidencias = 0;
for (let i = 0; i < arrayParaPruebas.length; i++) {
  for (let j = 0; j < arrayDiferente.length; j++) {
    arrayParaPruebas[i] === arrayDiferente[j] ? contadorCoincidencias++ : null;
  }

}
// console.log(contadorCoincidencias);
let str = "un string cualquiera"
let arrayAleatorio = ["Digital", "House", "true", "string", "123", "false", "54", str];
// console.log(arrayAleatorio[arrayAleatorio.length - 1]);

// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas.Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
//   Pista: revisá qué hace el método de strings.toUpperCase().
for (let i = 0; i < peliculas.length; i++) {
  peliculas[i] = peliculas[i].toUpperCase();

}
// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
//   para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
//   Importante: las películas animadas también deberían convertirse a mayúsculas.
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function fusionarArrays(arrayOriginal, nuevoArray) {
  for (let i = 0; i < nuevoArray.length; i++) {
    arrayOriginal.push(nuevoArray[i].toUpperCase());
  }
}

fusionarArrays(peliculas, peliculasAnimadas)
// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego.Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
//   PD: por precaución, guardá el elemento que vas a eliminar en una variable.
let elementoEliminado = peliculas.pop();
// 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// del mundo sobre las películas con el siguiente formato:
// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Te piden crear una función que compare las calificaciones e indique si son iguales
// o diferentes.Te confirman que están en el orden adecuado y que solo traen
// valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en
// orden al del array resultante de combinar películas con películas animadas.Es
// decir, el primer elemento del array de películas general corresponde al primer
// elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
// Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las
// funciones y testear su correcto funcionamiento.
// Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
// extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const coincidencias = []
function compararPuntajes(arrayScores1, arrayScores2) {
  for (let i = 0; i < arrayScores1.length; i++) {
    let mensaje = "El puntaje para " + peliculas[i];
    arrayScores2[i] === arrayScores1[i] ? mensaje += " coincide" : mensaje += " no coincide";
    coincidencias.push(mensaje)
  }

  return coincidencias;
}

// console.log(peliculas);
// console.log(compararPuntajes(asiaScores, euroScores));

// En este ejercicio deberás crear una función que devuelva un array con sus elementos
// invertidos, sin modificarlo.Luego, deberás hacer una función que lo modifique e invierta
// el orden de sus elementos.
// 1. Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso(no tenés que invertir el
// array).
function imprimirInverso(array) {
  for (let i = 0; i < array.length; i++) {
    let str = array[i];
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    console.log(reversedStr)
  }

}
// 2. Creá la función inversor que tome un array como argumento y devuelva uno
// nuevo invertido.
function inversor(arrayParaInvertir) {

}
imprimirInverso(peliculas);