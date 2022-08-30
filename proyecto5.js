const openEls = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
    el.addEventListener("click", function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}


closeModal.forEach(e => {
    e.addEventListener("click", function() {
        this.parentElement.parentElement.classList.remove(isVisible)
    })
})