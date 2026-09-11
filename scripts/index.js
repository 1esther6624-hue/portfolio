/* 포폴 index */

/* 스와이퍼 팝업 */
const graphicImages = document.querySelectorAll('.graphic_swiper .swiper-slide img');
const archivePopup = document.querySelector('.archive_popup');
const popupImage = document.querySelector('.popup_content img');
const popupClose = document.querySelector('.popup_close');

const detailImages = [
    './images/g0.jpg',
    './images/g1.jpg',
    './images/g2.jpg',
    './images/g3.jpg',
    './images/g4.jpg',
    './images/g5.jpg',
    './images/g6.jpg',
    './images/g7.jpg'
];

for (let i = 0; i < graphicImages.length; i++) {
    graphicImages[i].addEventListener('click', () => {
        popupImage.src = detailImages[i];
        archivePopup.classList.add('active');
    });
}

popupClose.addEventListener('click', () => {
    archivePopup.classList.remove('active');
});

/* 스크롤 스와이퍼 */
const archiveSwiper = new Swiper('.graphic_swiper', {
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

const videoSwiper = new Swiper('.video_swiper', {
    slidesPerView: 2,
    spaceBetween: 10,

    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: '.video_scrollbar',
        draggable: true,
    },
});