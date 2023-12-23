function test1(x, y) {
    return y - x
}

console.log(test1(10, 40))

function test2(x, y) {
    return x * 2
    console.log(x)
    return x / 2
}

// Funciones

// function pulgadas_a_centimetros(pulgadas) {
//     return pulgadas * 2.54
// }

// function string_a_url(dominio) {
//     return "http://www."+dominio+".com"
// }

// function string_con_admiracion(frase) {
//     return frase+"!!!"
// }

// function edad_perro(edad) {
//     return edad * 7
// }

// function valor_hora_trabajo(sueldo) {
//     return sueldo / 40
// }

// function imc(estatura, peso) {
//     return peso / (estatura * estatura)
// }

// Funciones Expresadas

// const pulgadas_a_centimetros = function(pulgadas){
//     return pulgadas *2.54
// }

// const string_a_url = function(dominio){
//     return "http://www." + dominio + ".com"
// }

// const string_con_admiracion = function(frase){
//     return frase + "!!!"
// }

// const edad_perro = function(edad){
//     return edad * 7
// }

// const valor_hora_trabajo = function(sueldo){
//     return sueldo / 40
// }

// const imc = function(estatura, peso){
//     return Math.round(peso / (estatura * estatura) *100)/100
// }

// Funciones flecha

const pulgadas_a_centimetros = pulgadas => pulgadas * 2.54
const string_a_url = dominio => "http://www." + dominio + ".com"
const string_con_admiracion = frase => frase + "!!!"
const edad_perro = edad => edad * 7
const valor_hora_trabajo = sueldo => sueldo / 40
const imc = (estatura, peso) => Math.round(peso / (estatura * estatura) *100)/100

console.log("***** Funciones *****")
console.log(pulgadas_a_centimetros(2))
console.log(string_a_url("pepito"))
console.log(string_con_admiracion("Hola"))
console.log(edad_perro(7))
console.log(valor_hora_trabajo(24000))
console.log(imc(1.80, 70))

// Ejercicios extras

const string_to_upper = palabra => palabra.toUpperCase()
const type_of_data = dato => typeof(dato)
const perimetro = radio => Math.round(2 * Math.PI * radio * 100)/100

console.log("***** Funciones Extras *****")
console.log(string_to_upper("hola cómo vas?"))
console.log(type_of_data(123))
console.log(type_of_data(true))
console.log(type_of_data("string"))
console.log(perimetro(3))