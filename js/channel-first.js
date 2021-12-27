const swiperFirst = new Swiper('.channel-first__slider', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
        nextEl: '.channel-first-button-next',
        prevEl: '.channel-first-button-prev',
    },
});