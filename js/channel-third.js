const swiperThird = new Swiper('.channel-third__slider', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
        nextEl: '.channel-third-button-next',
        prevEl: '.channel-third-button-prev',
    },
});