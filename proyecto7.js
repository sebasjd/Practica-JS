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


// START VALIDATION FUNCTION
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const taskInput = document.getElementById("task");
const infoCont = document.getElementById("showInfo");

let inputs = [nameInput, dateInput, timeInput, taskInput]

const invalid = () => valid = false;
const ifEmpty = () => "El campo debe ser completado"

let validCounter = 0

const validation = (inputField) => {
    invalid();

    const inputValue = inputField.value.trim();
    if (isEmpty(inputValue)) {
        showError(inputField, ifEmpty())
    } else {
        success(inputField);
        valid = true;
    }

    if (valid == true) {
        validCounter = validCounter + 1
        console.log(validCounter)
    }


}

const checkValid = () => {

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
    validCounter = 0
    inputs.forEach(e => validation(e));
    const date = new Date()
    let dia = dateInput.value.toString()
    console.log(dia.join(""));

    if (validCounter == inputs.length) {
        infoCont.innerHTML = `<div class="card">
        <div class="card__header">Tarea a Realizar</div>
        <div class="card__img">   </div>
        <div class="card__info">
            <ul>
                <li>Responsable: <span>${nameInput.value}</span></li>
                <li>Fecha: <span>${dateInput.value}</span></li>
                <li>Hora: <span>${timeInput.value}</span></li>
                <li>Tarea: <span>${taskInput.value}</span></li>
            </ul>
        </div>
        <button>Delete</button>
    </div>`;



    }
})

// END VALIDATION FUNCTION

// Delete button

// Create card function