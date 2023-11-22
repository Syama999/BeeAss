const recomendationItems = document.querySelectorAll('.recomendation__item');

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > 400) {
            recomendationItems[0].style.transform = 'translate(0px)';
            recomendationItems[0].style.opacity  = '100';
    } 
    if (window.scrollY > 800) {
        recomendationItems[1].style.transform = 'translate(0px)';
        recomendationItems[1].style.opacity  = '100';
    }
    if (window.scrollY > 1200) {
        recomendationItems[2].style.transform = 'translate(0px)';
        recomendationItems[2].style.opacity  = '100';
    }
});

