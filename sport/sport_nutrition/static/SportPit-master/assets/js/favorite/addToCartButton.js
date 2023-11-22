const addToCarButton = document.querySelectorAll('.item__buy-button');

addToCarButton.forEach(el => {
    el.addEventListener('click', () => {
        el.textContent = 'В корзине!';
        el.style.color = '#00CE3A';
        el.style.backgroundColor = 'black';
    })
})