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
                scrollTop: $(scroll_elem).offset().top - 100
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
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
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination-services',
        },
        navigation: {
            nextEl: '.swiper-button-next-services',
            prevEl: '.swiper-button-prev-services',
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    var mySwiperRew = new Swiper('.rewiews-slider-container', {
        slidesPerView: 1,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination-rewiews',
        }
    });

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });
});


$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '992') {
        $('.top-menu a').click(function() {
            $('#hamburger-icon').removeClass('active');
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        });
    }

});


// $(document).scroll(() => {
//     let scroll_status = $(document).scrollTop()
//     var headerH = $('.header').height();
//     if (scroll_status > headerH) {
//         $('.header').addClass('header--float');
//         $('body').css('padding-top', headerH);
//     } else {
//         $('.header').removeClass('header--float');
//         $('body').css('padding-top', '0');
//     }
// })