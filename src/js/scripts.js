$(document).scroll(() => {
    svg4everybody()
})

// example scrollTo
$(document).ready(function() {
    $("input[type=tel]").mask("+7 (999) 999-9999");

    $('.top-menu a').click(function() {
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_elem).offset().top - 50
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });

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

    var mySwiperRew = new Swiper('.rewiews-slider-container', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination-rewiews',
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