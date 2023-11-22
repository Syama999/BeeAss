// Counter
const plusButton = document.querySelectorAll('.fa-plus');
const minusButton = document.querySelectorAll('.fa-minus');
const counterInput = document.querySelectorAll('.counter-text');

// previousElementSibling / nextElementSibling = counter input
plusButton.forEach(element => {
    const getPrice = element.nextElementSibling.textContent.split(' ')[1].replace('₽', '') / 1;
    element.addEventListener('click', () => {
        element.previousElementSibling.value++;
        element.nextElementSibling.children[0].textContent = getPrice * element.previousElementSibling.value;
    })
});

minusButton.forEach(element => {
    const getItemTotalPrice = element.nextElementSibling.nextElementSibling.nextElementSibling;
    const getPrice = getItemTotalPrice.textContent.split(' ')[1].replace('₽', '') / 1;
    element.addEventListener('click', () => {
        element.nextElementSibling.value--;
        if (element.nextElementSibling.value / 1 < 1) {
            element.nextElementSibling.value = 1;
        }
        getItemTotalPrice.children[0].textContent = getPrice * element.nextElementSibling.value;
    })
});

counterInput.forEach(element => {
    const getPrice = element.nextElementSibling.nextElementSibling.textContent.split(' ')[1].replace('₽', '') / 1;
    element.addEventListener('input', () => {
        if (element.value.length > 2) {
            element.value = 99;
        };
        element.nextElementSibling.nextElementSibling.children[0].textContent = getPrice * element.value/1;
    })
})