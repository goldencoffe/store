
    const swiper = new Swiper(".swiper", {
    slidesPerView:2,
    spaceBetween: 14,
    navigation: {
    nextEl: '.arrow-left',
    prevEl: '.arrow-right',
},
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
    breakpoints: {
    640: {
    slidesPerView: 3,
},
    768:{
    spaceBetween: 20,
},
    1024: {
    slidesPerView: 4,
},
},
});

    const swiperoffer = new Swiper(".offer-slider", {
        slidesPerView:1,
        spaceBetween: 14,
        navigation: {
            nextEl: '.arrow-left',
            prevEl: '.arrow-right',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            768:{
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    var swipermainslider = new Swiper(".main-slider", {
        speed: 700,

        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`
        },
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },

        effect: "layer animations",
    });