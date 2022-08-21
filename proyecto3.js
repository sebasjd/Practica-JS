const button = document.getElementById("button");
const ul = document.getElementById("ul");
const br = document.querySelectorAll("span");



button.addEventListener("click", () => {
    ul.classList.toggle("activado");
    br.forEach(element => {
        element.classList.toggle("animado")
    });
});