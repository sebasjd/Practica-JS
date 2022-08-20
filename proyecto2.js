const counter = document.getElementById("counter");
const increase = document.getElementById("incr");
const decrease = document.getElementById("decr");
const reset = document.getElementById("reset");

let numero = 0;

increase.addEventListener("click", () => {
    numero++;
    counter.innerHTML = numero;
});

decrease.addEventListener("click", () => {
    if (numero == 0) {} else {
        numero--;
        counter.innerHTML = numero;
    }
})

reset.addEventListener("click", () => {

    numero = 0;

    counter.innerHTML = numero;
})