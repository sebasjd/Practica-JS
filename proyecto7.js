const button = document.getElementById("button");
const ul = document.getElementById("ul");
const br = document.querySelectorAll("span");



button.addEventListener("click", () => {
    ul.classList.toggle("activado");
    br.forEach(element => {
        element.classList.toggle("animado")
    });
});

// To Do List

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const taskInput = document.getElementById("task");

let inputs = [nameInput, dateInput, timeInput, taskInput]

const invalid = () => valid = false;
const ifEmpty = () => "El campo debe ser completado"


const validation = (inputField) => {
    invalid();
    const inputValue = inputField.value.trim();
    if (isEmpty(inputValue)) {
        showError(inputField, ifEmpty())
    } else {
        success(inputField);
        valid = true;
    }
    return valid
    console.log(valid);
}

const isEmpty = inputValue => inputValue == "";
const showError = (inputField, message) => {
    const small = inputField.parentElement.querySelector("small");
    small.textContent = message;
}
const success = (inputField) => {
    const small = inputField.parentElement.querySelector("small");
    small.textContent = "";

}

form.addEventListener("submit", e => {
    e.preventDefault();
    inputs.forEach(e => validation(e));
})