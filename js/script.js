//Swiper
new Swiper('.hero__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.hero__slider-btn_next',
        prevEl: '.hero__slider-btn_prev'
    },
    autoplay: {
        delay: 3000
    },
    breakpoints: {

        320: {
            slidesPerView: 1
        },

        560: {
            slidesPerView: 2,
            spaceBetween: 8
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
})

// Footer year
const footerCopyrightYear = document.querySelector('.footer__copyright span');
const currentYear = new Intl.DateTimeFormat('RU-ru', {year: 'numeric'}).format(new Date());
footerCopyrightYear.textContent = currentYear;

//Calculator
const calcForm = document.querySelector('.calc__form');
const calcResultSquare = document.querySelector('.calc__result-square');
const calcResultLength = document.querySelector('.calc__result-length');
const tariff = {
    economy: 550,
    comfort: 1400,
    premium: 2700
};
calcForm.addEventListener('submit', event => {
    event.preventDefault();
    if (calcForm.width.value > 0 && calcForm.length.value > 0) {
        const square = calcForm.width.value * calcForm.length.value;
        const price =  square * tariff[calcForm.rate.value];
        calcResultSquare.textContent = String(square);
        calcResultLength.textContent = String(price);
        calcForm.reset();
    }
})
