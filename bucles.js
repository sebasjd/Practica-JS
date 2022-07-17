console.log(`===========PRACTICA DE BUCLES==============`)

// Ejercicios del comienzo //

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < 10; i++) {
    unidad = numeros[i]
    console.log(unidad);
};

////////////////////////////

for (i = 0; i < 5; i++) {
    unidad = numeros[i]
    console.log(unidad);
};

//////////////////////////////////

for (i = 9; i > 4; i--) {
    unidad = numeros[i]
    console.log(unidad);
};

/////////////////////////////////////

for (i = 0; i < 10; i++) {
    unidad = numeros[i]
    if (i == 4) continue;

    console.log(unidad);
};

/////////////////////////////////////////////


// 1 //


numero = 1

while (numero <= 50) {
    console.log("Estamos en la iteración número " + numero);
    numero = numero + 1
};

let ascendente = numero => {
    if (numero <= 50) {
        console.log(`Estamos en la iteración número: ${numero}`);
        return (ascendente(numero + 1))
    }
};

ascendente(1);


// 2 //


for (i = 50; i > 0; i--) {
    console.log(`Estamos en la iteración N° ${i}`)
};


let descendente = numero => {
    if (numero > 0) {
        console.log(`Estamos en la iteración N° ${numero}`);
        return (descendente(numero - 1));
    }
};

descendente(50);


// 3 //

contador = -3

while (contador <= 20) {
    if (contador !== 20) {
        console.log(`Valor actual => ${contador} <=`);
    } else {
        console.log(`Ya llegamos al valor final (20)`);
    }
    contador++
};

// 4 //


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (element of array) {
    console.log(element)
};

// 5 //

for (i = 0; i < array.length; i++) {
    console.log(`${array[i]*2}`)
};

// 6 //

for (i = 0; i < 5; i++) {
    console.log(array[i])
};

// 7 //

for (i = 0; i < array.length; i++) {
    if (array[i] != 7) {
        console.log(array[i])
    }
    continue;
};


// 8 //

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
};


// 9 //

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        console.log(array[i])
    }
};


// 10 //

let ejercicio10 = i => {
    while (i < array.length) {
        for (elemento of array) {
            console.log(`${elemento} multiplicado por ${i} es igual a ${elemento*i}`)
        };
        i = i + 1;
    };
};


ejercicio10(1)