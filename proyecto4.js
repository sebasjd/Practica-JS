    const sliders = [...document.querySelectorAll('.slider-body')];
    const arrowBefore = document.getElementById('before')
    const arrowNext = document.getElementById('next')
    let value;
    arrowNext.addEventListener('click', () => changePosition(1))
    arrowBefore.addEventListener('click', () => changePosition(-1))

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.slider-body-show').dataset.id);

        value = currentElement;
        value += change;
        if (value == 0 || value > sliders.length) {
            value = value === 0 ? sliders.length : 1
        }
        sliders[currentElement - 1].classList.toggle('slider-body-show')
        sliders[value - 1].classList.toggle('slider-body-show');
    }