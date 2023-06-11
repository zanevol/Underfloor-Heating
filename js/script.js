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
