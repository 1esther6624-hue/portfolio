/* 포폴 index */
const archiveSwiper = new Swiper('.archive_swiper', {
    slidesPerView: 5,
    spaceBetween: 10,

    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: '.archive_prev',
        nextEl: '.archive_next',
    },
    scrollbar: {
        el: '.archive_scrollbar',
        draggable: true,
    },
});