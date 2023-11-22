// FOR HEADER
const headerMenuMobile = document.querySelector('.header-menu-mobile');
const headerMenuMobileIcon = document.querySelector('.header-menu-mobile__icon');
const headerMenuMobileBars = document.querySelectorAll('.header-menu-mobile__icon-item');

// Header mobile menu animation
function headerMobileMenuAnimation() {
    headerMenuMobile.classList.toggle('header-menu-mobile-open');
    for (i = 0; i < headerMenuMobileBars.length; i++) {
        headerMenuMobileBars[0].style.transform = "rotate(45deg)";
        headerMenuMobileBars[1].style.transform = "rotate(-45deg)";
        headerMenuMobileBars[1].style.marginTop = "-7px";
        headerMenuMobileBars[2].style.transform = "rotate(-45deg)";
        headerMenuMobileBars[2].style.marginTop = "-6.5px";
    }

    if (!headerMenuMobile.classList.contains('header-menu-mobile-open')) {
        headerMenuMobileBars.forEach(el => {
            el.style.transform = "rotate(0deg)";
            el.style.marginTop = "0px";
        })
    }
}

headerMenuMobileIcon.addEventListener('click', () => {
    headerMenuMobile.style.display = 'flex';

    setTimeout(headerMobileMenuAnimation, 0);
});

// Responsive search
const headerSearch = document.querySelector('.header-menu__search');
const headerLogoContainer = document.querySelector('.header-logo');
if (window.outerWidth <= 520) {
    headerLogoContainer.append(headerSearch);
}

// Change logo icon & color
const colors = ['#DFDF4A', '#008000', '#E92C03'];
const icons = ['fa-bicycle', 'fa-volleyball-ball', 'fa-dumbbell', 'fa-skiing'];

const headerLogo = document.querySelector('.header-logo__text');
const headerLogoIcon = document.querySelector('.fas');
window.addEventListener('load', () => {
    let randomColorNumber = Math.round(Math.random()*2);
    let randomIconNumber = Math.round(Math.random()*3);
    headerLogo.style.color = `${colors[randomColorNumber]}`;
    headerLogoIcon.classList.add(`${icons[randomIconNumber]}`);
})

// Go to the main page by clicking on the logo
headerLogo.addEventListener('click', () => {
    window.location.href = "/"
});

// HEADER LOGIN
const login = document.querySelector('.login');
const loginButtons = document.querySelectorAll('.header-menu ul li:first-of-type a, .header-menu-mobile ul li:first-of-type a');
const closeLogin = document.querySelector('.fa-times');
const body = document.querySelector('body');

loginButtons.forEach(element => {
    element.addEventListener('click', () => {
        login.style.display = 'flex';
        body.style.overflowY = 'hidden';
        setTimeout(() => {
            login.style.left = 0;
        }, 0);
    })
});

closeLogin.addEventListener('click', () => {
    login.style.left = '100%';
    body.style.overflowY = 'scroll';
    setTimeout(() => {
        login.style.display = 'none'; 
    }, 300);
});

// SCROLL TO TOP
const scrollToTopButton = document.querySelector('.scroll-to-top__button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('scroll-to-top__button-active');
    } else {
        scrollToTopButton.classList.remove('scroll-to-top__button-active');
    }
})