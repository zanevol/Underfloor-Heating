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
    }
})

// Footer year
const footerCopyrightYear = document.querySelector('.footer__copyright span');
const currentYear = new Intl.DateTimeFormat('RU-ru', {year: 'numeric'}).format(new Date());
footerCopyrightYear.textContent = currentYear;
