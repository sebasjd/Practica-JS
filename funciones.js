console.log(`===========PRACTICA DE FUNCIONES==============`);
//1//
let saludar = nombre => console.log(`hola, soy ${nombre}`);

saludar("seba");

//2//

let suma = (a, b) => console.log(a + b);

suma(40, 60);

//3//

let calculo = (a, b) => {
    c = a * 2;
    d = b * 2;
    console.log(c + d);
}

calculo(2, 2)

//4//

let tabla = numero => {
    let i = 1
    while (i <= 10) {
        console.log(`El ${numero} multiplicado por el ${i} nos da ${numero*i}`);
        i = i + 1;
    }
}

tabla(3);

//5//

let contador = (a, b) => {
    if (a == b) {
        console.log("Los números con iguales");
    } else if (a < b) {
        for (i = a; i <= b; i++) {
            console.log(i);
        }
    } else {
        for (i = a; i >= b; i--) {
            console.log(i);
        }
    }
};

contador(10, 6);

//6//

function sumar(a, b) { console.log(`SUMAR:  ${a} más ${b} da ${a+b}`) };

function restar(a, b) { console.log(`RESTAR:  ${a} menos ${b} da ${a-b}`) };

function multiplicar(a, b) { console.log(`MULTIPLICAR:  ${a} por ${b} da ${a*b}`) };

function dividir(a, b) { console.log(`DIVIDIR:  ${a} dividido ${b} da ${a/b}`) };

function operar(operacion, a, b) { operacion(a, b) };

operar(dividir, 2, 4)