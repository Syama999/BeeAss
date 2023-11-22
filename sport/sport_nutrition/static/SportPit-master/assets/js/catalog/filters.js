const filtersItemName = document.querySelectorAll('.filters-item h3');

filtersItemName.forEach(el => {
    el.addEventListener('click', () => {
        el.nextElementSibling.classList.toggle('filters-item-container-open');
    })
})

// Price range
const minPriceInput = document.querySelector('.price-range-container input:first-child');
const maxPriceInput = document.querySelector('.price-range-container input:last-child');
const itemPrice = document.querySelectorAll('.catalog-item-info');
const itemPrices = [];

itemPrice.forEach(el => {
    const itemPrice = el.children[1].children[0].textContent.slice('') / 1;
    itemPrices.push(itemPrice);
});

maxPriceInput.setAttribute('max', Math.max(...itemPrices));
maxPriceInput.setAttribute('placeholder', Math.max(...itemPrices));

function inputLimit(input) {
    input.addEventListener('input', () => {
        if (input.value > maxPriceInput.getAttribute('max') / 1) {
            input.value = maxPriceInput.getAttribute('max') / 1;
        }
    })
}
inputLimit(maxPriceInput);
inputLimit(minPriceInput);