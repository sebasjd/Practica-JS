// configurando MODAL

const formContainer = document.getElementById("formContainer");
const open = document.querySelectorAll("[data-open]");
const close = document.querySelectorAll("[data-close]")
const invisible = "invisible";


for (const i of open) {
    i.addEventListener("click",
        function() {
            const openId = this.dataset.open;
            document.getElementById(openId).classList.remove(invisible)
        })
};

close.forEach(e => {
    e.addEventListener("click",
        function() {
            this.parentElement.parentElement.classList.add(invisible)
        })
});



// Validando formulario:

const form = document.getElementById("form")
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");


const checkName = () => {
    let valid = false;
    const inputValue = nameInput.value.trim();
    if (isEmpty(inputValue)) {
        showError(nameInput, "Debe completar el campo")
    } else if (!isNameValid(inputValue)) {
        showError(nameInput, "Los datos ingresados no son correctos")
    } else {
        success(nameInput)
        valid = true
    }
    return valid
}
const checkPhone = () => {
    valid = false;
    inputValue = phoneInput.value.trim();
    if (isEmpty(inputValue)) {
        showError(phoneInput, "Debe completar el campo")
    } else if (!isPhoneValid(inputValue)) {
        showError(phoneInput, "Los datos ingresados no son correctos")
    } else {
        success(phoneInput)
        valid = true
    }
    return valid
}
const checkEmail = () => {
    valid = false;
    inputValue = emailInput.value.trim();
    if (isEmpty(inputValue)) {
        showError(emailInput, "Debe completar el campo")
    } else if (!isEmailValid(inputValue)) {
        showError(emailInput, "Los datos ingresados no son correctos")
    } else {
        success(emailInput)
        valid = true
    }
    return valid
}
const checkPass = () => {
    valid = false;
    inputValue = passInput.value.trim();
    if (isEmpty(inputValue)) {
        showError(passInput, "Debe completar el campo")
    } else if (!isPassValid(inputValue)) {
        showError(passInput, "Debe contener al menos una mayuscula y un caracter especial")
    } else {
        success(passInput)
        valid = true
    }
    return valid
}



const isEmpty = (inputValue) => inputValue == "";

const isNameValid = (value) => {
    const re = /^[a-z ,.'-]+$/i;
    return re.test(value)
}
const isPhoneValid = (value) => {
    const re = /^[0-9]{10}$/;
    return re.test(value)
}
const isEmailValid = (value) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value)
}
const isPassValid = (value) => {
    const re = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return re.test(value)
}

const showError = (input, message) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small")
    error.textContent = message;
    error.parentElement.classList.remove("mb-3");
    error.parentElement.classList.add("mb-0");
}

const success = (input) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small");
    error.textContent = "";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkName()
    checkPhone()
    checkEmail()
    checkPass()
})