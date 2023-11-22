const deleteItemIcons = document.querySelectorAll('.item .fa-times');

deleteItemIcons.forEach(el => {
    el.addEventListener('click', () => {
        el.parentElement.style.transform = 'scale(.01)';
        setTimeout(() => {
            el.parentElement.style.display = 'none';
        }, 350)
    })
});