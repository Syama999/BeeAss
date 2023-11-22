const volumeButton = document.querySelectorAll('.volume-variants button[type="button"]');

volumeButton.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('selected');
        for (i = 0; i < volumeButton.length; i++) {
            if (volumeButton[i] !== el) {
                volumeButton[i].classList.remove('selected')
            }
        }
    })
})