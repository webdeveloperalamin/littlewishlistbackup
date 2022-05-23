var swiper = new Swiper("#banner-slider", {
    speed: 600,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper("#wishlist-slider", {
    speed: 600,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper("#recomended-products", {
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,
    cssMode: true,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
});

var swiper = new Swiper("#card-slider", {
    speed: 600,
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 2,
    spaceBetween: 50,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper("#logo-carousel", {
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    loop: true,
    cssMode: true,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        },
    },
});

var swiper = new Swiper("#product-categories-1", {
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    loop: true,
    cssMode: true,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});

var swiper = new Swiper("#product-categories-2", {
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    loop: true,
    cssMode: true,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
});

var swiper = new Swiper("#product-categories-3", {
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    loop: true,
    cssMode: true,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
});

var modal = new PlainModal(document.getElementById('home-modal-popup-content'), { duration: 400, closeButton: document.getElementById('popup-close') });

var clipboard = new ClipboardJS('#copy-clipboard-input');



(function($) {
    $(document).ready(function() {
        setTimeout(function() {
            modal.open();
        }, 5000); //set interval to 3 second
    });
})(jQuery);