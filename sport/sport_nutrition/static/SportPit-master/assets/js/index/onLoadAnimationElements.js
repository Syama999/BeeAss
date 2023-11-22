const siteInfoItems = document.querySelectorAll('.site-info__item');

for(i=0; i< siteInfoItems.length; i++) {
    let transitionRandomNumber = (Math.random()*i) * .8;
    siteInfoItems[i].style.transition = `${transitionRandomNumber + .3}s ease transform, ${transitionRandomNumber + .3}s ease opacity`
}

window.addEventListener('load', () => {
    siteInfoItems.forEach(el => {
        el.style.transform = 'translate(0px)';
        // el.style.transform = 'scale(1)';
        el.style.opacity = 100;
    })
});