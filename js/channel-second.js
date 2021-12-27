const swiperSecond = new Swiper('.channel-second__slider', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
        nextEl: '.channel-second-button-next',
        prevEl: '.channel-second-button-prev',
    },
});