const themeInput = document.querySelector('.problem-form input');
const formButton = document.querySelector('.problem-form-buttons button');
formButton.setAttribute('disabled', '');
themeInput.addEventListener('input', () => {
    if (themeInput.value !== '') {
        formButton.removeAttribute('disabled', '')
    } else {
        formButton.setAttribute('disabled', '');
    }
})