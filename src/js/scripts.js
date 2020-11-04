$(document).scroll(() => {
    svg4everybody()
})

// example scrollTo
$(document).ready(function() {
    $('.header').on("click", "a", (e) => {
        e.preventDefault()
        let id = $(this).attr('href'),
            top = $(id).offset().top - 0;
        $('body,html').animate({ scrollTop: top }, 1500)
    });

    var mySwiper = new Swiper('.master-slider-container', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination-master',
        },
        navigation: {
            nextEl: '.swiper-button-next-master',
            prevEl: '.swiper-button-prev-master',
        }
    });

    var mySwiperServ = new Swiper('.services-slider-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination-services',
        },
        navigation: {
            nextEl: '.swiper-button-next-services',
            prevEl: '.swiper-button-prev-services',
        }
    });
});

// exaple header float

$(document).scroll(() => {
    let scroll_status = $(document).scrollTop()

    if (scroll_status > $('.header').height()) {
        $('.header').addClass('header--float')
    } else {
        $('.header').removeClass('header--float')
    }
})