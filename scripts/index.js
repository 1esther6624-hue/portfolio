/* 포폴 index */

// 전체 메인 Swiper
const mainSlide = new Swiper('.main-slide', {

    direction: 'vertical',
    mousewheel: true,
    on: {
        slideChange: function(swiper) {
            chkResumeFunc(swiper);
        },
        init: function(swiper) {
            chkResumeFunc(swiper);
        }
    }
});

/* Resume 애니메이션 */
function chkResumeFunc(swiper) {
    if (swiper.activeIndex === 1) {
        gsap.to('main #resume #resume_contents .philosophy', {
            opacity: 1,
            duration: 1
        });

        gsap.to('main #resume #resume_contents #resume_left2', {
            opacity: 1,
            duration: 1
        });

        gsap.to('main #resume #resume_contents #resume_left3', {
            opacity: 1,
            duration: 1
        });
    } else {
        gsap.set('main #resume #resume_contents .philosophy', {
            opacity: 0
        });
        gsap.set('main #resume #resume_contents #resume_left2', {
            opacity: 0
        });
        gsap.set('main #resume #resume_contents #resume_left3', {
            opacity: 0
        });
    }
}

/* ================= 그래픽 팝업 */

const posterInfo = {
    'g0.jpg': {
        title: 'Poster 01',
        desc: '\n줄바꿈'
    },
    'g1.jpg': {
        title: 'Poster 02',
        desc: '두 번째 포스터 설명입니다.'
    },
    'g2.jpg': { title: 'Poster 03', desc: '' },
    'g3.jpg': { title: 'Poster 04', desc: '' },
    'g4.jpg': { title: 'Poster 05', desc: '' },
    'g5.jpg': { title: 'Poster 06', desc: '' },
    'g6.jpg': { title: 'Poster 07', desc: '' },
    'g7.jpg': { title: 'Poster 08', desc: '' },
};

const graphicSwiperEl = document.querySelector('.graphic_swiper');
const popup       = document.querySelector('.archive_popup');
const popupImgBox = popup.querySelector('.popup_image');
const popupImg    = popup.querySelector('.popup_image img');
const popupTitle  = popup.querySelector('.popup_info h3');
const popupDesc   = popup.querySelector('.popup_info p');
const popupClose  = popup.querySelector('.popup_close');

function openPopup(slide) {
    const img  = slide.querySelector('img');
    const file = img.getAttribute('src').split('/').pop();
    const info = posterInfo[file] || {};

    popupImg.src = img.src;
    popupImg.alt = img.alt;
    popupTitle.textContent = info.title || img.alt;
    popupDesc.textContent  = info.desc || '';
    popupImgBox.scrollTop  = 0;
    popup.classList.add('active');
}

function closePopup() {
    popup.classList.remove('active');
}

graphicSwiperEl.addEventListener('click', (e) => {
    const slide = e.target.closest('.swiper-slide');
    if (slide) openPopup(slide);
});

// 닫기: X 버튼
popupClose.addEventListener('click', closePopup);
popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
});

/* Graphic Swiper */
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

/* ================= 영상 팝업 */
const videoPopup      = document.querySelector('.video_popup');
const videoPopupPlayer = videoPopup.querySelector('video');
const videoPopupClose = videoPopup.querySelector('.video_popup_close');

function openVideoPopup(src) {
    videoPopupPlayer.src = src;
    videoPopupPlayer.muted = false;
    videoPopup.classList.add('active');
    videoPopupPlayer.play();
}

function closeVideoPopup() {
    videoPopup.classList.remove('active');
    videoPopupPlayer.pause();
    videoPopupPlayer.removeAttribute('src');
    videoPopupPlayer.load();
}

// 썸네일 클릭
document.querySelector('#video .video_list').addEventListener('click', (e) => {
    const player = e.target.closest('.video_player');
    if (!player) return;
    const video = player.querySelector('video');
    openVideoPopup(video.getAttribute('src'));
});

// 닫기: X 버튼
videoPopupClose.addEventListener('click', closeVideoPopup);
videoPopup.addEventListener('click', (e) => {
    if (e.target === videoPopup) closeVideoPopup();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoPopup.classList.contains('active')) closeVideoPopup();
});