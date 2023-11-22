// Item buttons
const saveButton = document.querySelectorAll('.fa-save');
const buyButton = document.querySelectorAll('.fa-cart-arrow-down');
const deleteButton = document.querySelectorAll('.fa-trash-alt');

function buttonClick(button) {
    button.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('clicked');
        })

        if (button === deleteButton) {
            element.addEventListener('click', () => {
                element.closest('.item').style.transform = 'scale(0.001)';
                setTimeout(() => {
                    element.closest('.item').style.display = 'none';
                }, 400);
            })
        }
    });
}
buttonClick(saveButton);
buttonClick(buyButton);
buttonClick(deleteButton);