/* 포폴 index */

const archiveSwiper = new Swiper('.archive_swiper', {
    slidesPerView: 5,
    spaceBetween: 10,

    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: '.graphic_scrollbar',
        draggable: true,
    },
});