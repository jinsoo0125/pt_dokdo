$(function () {

    const MVS = new Swiper('.main_visual .main_visual_slide', {
        loop: true,
        grabCursor: true,
        speed: 800,
        parallax: true,

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },

    });

    const MNS = new Swiper('.main_notice .main_notice_slide', {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 30,

        navigation: {
            nextEl: '.main_notice .arrows .next',
            prevEl: '.main_notice .arrows .prev',
        },
    })

});


$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })
})