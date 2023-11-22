const sliderItem = document.querySelectorAll('.product-slider__item');
const productPreview = document.querySelector('.product-photo img');

sliderItem.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.add('product-slider__item-active');
        productPreview.setAttribute('src', el.children[0].getAttribute('src'));

        for (i = 0; i < sliderItem.length; i++) {
            if (sliderItem[i] !== el) {
                sliderItem[i].classList.remove('product-slider__item-active')
            }
        }
    })
})

const sliderButtonDown = document.querySelectorAll('.fa-chevron-down');
const sliderLine = document.querySelector('.product-slider-line');
let sliderLineOffset = 0;
function sliderOffset(sliderButton) {
    sliderButton.addEventListener('click', () => {
        if (sliderButton == sliderButtonDown[1]) {
            sliderLineOffset += 90;
            sliderLine.style.top = -sliderLineOffset + 'px';
        } else {
            sliderLineOffset += -90;
            sliderLine.style.top = -sliderLineOffset + 'px';
        }

        if (sliderLine.style.top.split('px')[0]/1 < -450) {
            sliderLine.style.top = 0;
            sliderLineOffset = 0.01;
        } else if (sliderLine.style.top.split('px')[0]/1 > 1) {
            sliderLineOffset = 0.01;
            sliderLine.style.top = 0;
        }
    })
}
sliderOffset(sliderButtonDown[0]);
sliderOffset(sliderButtonDown[1]);