// Cómo crear un cambiador de colores

// Conceptos clave cubiertos:
// arreglos
// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// arreglo.length


const colors = ["green", "red", "black", "yellow"];
const button = document.getElementById("button");
const color = document.getElementsByClassName("color");
const calar = document.querySelector("#calar")

button.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    calar.innerHTML = colors[randomNumber];
    console.log(color)
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}