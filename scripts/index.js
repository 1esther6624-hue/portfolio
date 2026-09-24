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

// 메인메뉴
document.querySelectorAll('header nav a, #menu .menu_item').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        const index = Array.from(mainSlide.slides).indexOf(target);

        if (index > -1) {
            mainSlide.slideTo(index, 800);
        }
    });
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
// \n줄바꿈

const posterInfo = {
    'g0.jpg': {
        title: 'Trace of Indigo',
        desc: '인디고 꽃을 소재로 한 식물도감 컨셉의 그래픽 포스터입니다. \n 어두운 배경과 블루 톤의 대비를 활용해 신비롭고 학술적인 분위기를 표현했으며, 세밀한 라인으로 꽃잎의 질감을 살렸습니다.'
    },
    'g1.jpg': {
        title: 'Mamonde x Chupa Chups',
        desc: '브랜드 마몽드와 츄파춥스 콜라보 포스터입니다. \n 로즈 리퀴드 마스크의 촉촉하고 매끈한 사용감을 강조하기 위해, 츄파춥스의 컬러감과 캔디 이미지를 활용해 발랄하고 달콤한 무드로 디자인했습니다.'
    },
    'g2.jpg': {
        title: '대추방울토마토 상세페이지',
        desc: '대추방울토마토의 신선함과 당도를 강조한 커머스 상세페이지입니다. \n 상단에는 클로즈업 이미지로 제품의 색감과 품질을 직관적으로 보여주고, 중단에는 영양 성분과 효능 정보를 구성해 구매 신뢰도를 높였습니다. \n 하단에는 실제 구매 후기를 배치하여 소비자의 구매 결정을 자연스럽게 유도하도록 설계했습니다.'
    },
    'g3.jpg': {
        title: 'Strawberry Waffle',
        desc: '카페 홍보용 포스터로, 딸기 와플 메뉴를 소개하는 컨셉입니다. \n 체크무늬 피크닉 매트와 자연광 톤을 활용해 따뜻하고 아날로그적인 분위기를 연출했으며, 라벨·바코드 요소로 실제 상품처럼 느껴지도록 디자인했습니다.'
    },
    'g4.jpg': {
        title: 'Carmex × Olive Young',
        desc: '카멕스와 올리브영의 콜라보 프로모션 포스터입니다. \n "24시간만 만날 수 있는 찬스"라는 문구로 한정 특가를 강조하고, 강렬한 노란색 배경과 빨간 포인트 컬러로 시선을 사로잡는 세일즈형 디자인을 제작했습니다.'
    },
    'g5.jpg': {
        title: 'Sansan Gear x NCT WISH',
        desc: '산산기어와 엔시티 위시의 콜라보 프로모션 포스터입니다. \n 역동적인 인물 실루엣과 도트 패턴의 텍스트 배경을 결합해 스포티하면서도 그래픽적인 무드를 표현했습니다.'
    },
    'g6.jpg': {
        title: '삼계탕',
        desc: '전통 한식 삼계탕을 소개하는 포스터입니다. \n 따뜻한 우드톤과 한방 재료 이미지를 배치해 건강하고 정갈한 이미지를 강조했으며, 캘리그래피 느낌의 타이틀로 전통적인 분위기를 살렸습니다.'
    },
    'g7.jpg': {
        title: 'Odyssey',
        desc: '인물 콜라주 기법을 활용한 실험적 그래픽 포스터입니다. \n 블루 톤 필터와 흑백 이미지를 혼합하고, 형광 컬러 포인트를 더해 자유롭고 감각적인 분위기를 표현했습니다.'
    },
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
const videoPopupFrame = videoPopup.querySelector('iframe');
const videoPopupClose = videoPopup.querySelector('.video_popup_close');

function openVideoPopup(url) {
    const id = new URL(url).searchParams.get('v');
    videoPopupFrame.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    videoPopup.classList.add('active');
}

function closeVideoPopup() {
    videoPopup.classList.remove('active');
    videoPopupFrame.src = '';
}

// 썸네일 클릭
document.querySelector('#video .video_list').addEventListener('click', (e) => {
    const player = e.target.closest('.video_player');
    if (!player) return;
    e.preventDefault();/* 유튜브이동 x */
    openVideoPopup(player.href);
});

// 닫기
videoPopupClose.addEventListener('click', closeVideoPopup);
videoPopup.addEventListener('click', (e) => {
    if (e.target === videoPopup) closeVideoPopup();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoPopup.classList.contains('active')) closeVideoPopup();
});

// 마우스
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project_lego').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});