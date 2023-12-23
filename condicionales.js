
// ternario ---> condicion ? 

const llevoParaguas = (clima) => {

    // if (clima === "lluvioso") {
    //     return "si, llevalo"
    // } else {
    //     return "no, no hace falta"
    // }

    let condicionFinal = clima === "lluvioso" ? "si, llevalo" : "no, no hace falta"
    return condicionFinal
}

let loLlevo = llevoParaguas("lluvioso")
console.log(loLlevo)

// impuesto fijo ---> 200
// audi 50
// vw 60
// volvo 30
// renault 55
// bmw 70
// fiat 80

const calcularImpueesto = marcaDeAuto => {

    let impuesto = 200

    switch (marcaDeAuto) {
        case "audi":
            return impuesto + 50
        case "vw":
            return impuesto + 60
        case "volvo":
            return impuesto + 12
        case "renault":
            return impuesto + 55
        case "bmw":
            return impuesto + 55
        case "fiat":
            return impuesto + 30  
        default:
            return "su auto esta excento"
    }
}

