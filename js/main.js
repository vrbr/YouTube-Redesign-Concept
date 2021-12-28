const swiperFirst = new Swiper('.channel-first__slider', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
        nextEl: '.channel-first-button-next',
        prevEl: '.channel-first-button-prev',
    },
});

const swiperSecond = new Swiper('.channel-second__slider', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
        nextEl: '.channel-second-button-next',
        prevEl: '.channel-second-button-prev',
    },
});

const swiperThird = new Swiper('.channel-third__slider', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
        nextEl: '.channel-third-button-next',
        prevEl: '.channel-third-button-prev',
    },
});

const searchButton = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');

searchButton.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
    swiperFirst.destroy();
    swiperSecond.destroy();
    swiperThird.destroy();
}