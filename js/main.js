$(function () {

    $("body").slideDown(1000);

    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").slideUp(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }

    $('.slider__inner').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        adaptiveHeight: true
    });

    $('.header-slider__inner').slick({
        dots: true,
        speed: 1500,
        slidesToShow: 1,
        autoplay: true,
        adaptiveHeight: true
    });

    $('.about-creative__slider').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 2,
        infinite: false,
        initialSlide: 1,
        speed: 1000,
        centerMode: true,
        nextArrow: '<div class="slider-arrow__right">arrow</div>',
        prevArrow: '<div class="slider-arrow__left">arrow</div>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                }
            },
        ]
    });

    $('.slider-portfolio').slick({
        slidesToScroll: 1,
        speed: 1500,
        dots: true,
        arrows: true,
        vertical: true,
        verticalSwiping: true
    });

    $('.slider-portfolio').on('wheel', (function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));

    $('#hamburger').click(function () {
        $('#hamburger').toggleClass('open-hamburger');
        $('.img-active').css('transform', 'translateX(0)');
    });

    if ($('#hamburger').click(function () {
            $('.hamburger-img').toggleClass('img-active');
            $('.img-active').css('transform', 'translateX(0)');
        }));

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px"
    });

    var e = document.getElementById("pointer");

    $('a').mouseenter(function () {
        $('.pointer').css({
            'width': '80px',
            'height': '80px',
            'background': 'transparent',
            'box-shadow': '0 0 30px 0 #ef0d33',
            'filter': 'blur(1px)'
        });
    });

    $('#hamburger').mouseenter(function () {
        $('.pointer').css({
            'width': '30px',
            'height': '30px',
            'background': 'transparent',
            'box-shadow': '0 0 30px 0 #ef0d33',
            'filter': 'blur(1px)'
        });
    });

    $('#hamburger').mouseleave(function () {
        $('.pointer').css({
            'width': '10px',
            'height': '10px',
            'background': '#ef0d33',
            'box-shadow': 'none',
            'filter': 'blur(0)'
        });
    });

    $('.form-hover').mouseenter(function () {
        $('.pointer').css({
            'width': '30px',
            'height': '30px',
            'background': 'transparent',
            'box-shadow': '0 0 30px 0 #ef0d33',
            'filter': 'blur(1px)'
        });
    });

    $('.form-hover').mouseleave(function () {
        $('.pointer').css({
            'width': '10px',
            'height': '10px',
            'background': '#ef0d33',
            'box-shadow': 'none',
            'filter': 'blur(0)'
        });
    });

    $('.header-menu').mouseenter(function () {
        $('.pointer').css({
            'width': '10px',
            'height': '10px',
            'background': '#ef0d33',
            'box-shadow': 'none',
            'filter': 'blur(0)'
        });
    });

    $('#button').mouseenter(function () {
        $('.pointer').css({
            'width': '30px',
            'height': '30px',
            'background': 'transparent',
            'box-shadow': '0 0 30px 0 #fff',
            'filter': 'blur(1px)',
            'backdrop-filter': 'invert(0)'
        });
    });

    $('.slick-dots').mouseenter(function () {
        $('.pointer').css({
            'width': '30px',
            'height': '30px',
            'background': 'transparent',
            'box-shadow': '0 0 30px 0 #ef0d33',
            'filter': 'blur(1.5px)',
            'backdrop-filter': 'invert(0)'
        });
    });

    $('.slick-dots').mouseleave(function () {
        $('.pointer').css({
            'width': '10px',
            'height': '10px',
            'background': '#ef0d33',
            'box-shadow': 'none',
            'filter': 'blur(0)'
        });
    });

    $('#button').mouseleave(function () {
        $('.pointer').css({
            'width': '10px',
            'height': '10px',
            'background': '#ef0d33',
            'box-shadow': 'none',
            'filter': 'blur(0)'
        });
    });

    $('.arrow-box').mouseenter(function () {
        $('.pointer').css({
            'width': '30px',
            'height': '30px',
            'background': 'transparent',
            'backdrop-filter': 'invert(0)'
        });
    });

    $('a').mouseleave(function () {
        $('.pointer').css({
            'width': '10px',
            'height': '10px',
            'background': '#ef0d33',
            'box-shadow': 'none',
            'filter': 'blur(0)'
        });
    });

    $('.recent').mouseleave(function () {
        $('.pointer').css({
            'width': '10px',
            'height': '10px',
            'background': '#ef0d33',
            'box-shadow': 'none',
            'filter': 'blur(0)'
        });
    });

    $('.recent__block-btn').mouseenter(function () {
        $('.pointer').css({
            'width': '80px',
            'height': '80px',
            'background': 'transparent',
            'box-shadow': '0 0 30px 0 #fff',
            'filter': 'blur(1px)',
            'backdrop-filter': 'contrast(80%)'
        });
    });

    $('.fine__link').mouseenter(function () {
        $('.pointer').css({
            'width': '80px',
            'height': '80px',
            'background': 'transparent',
            'box-shadow': '0 0 30px 0 #ef0d33',
            'backdrop-filter': 'contrast(100%)'
        });
    });

    $('.blog__block').mouseenter(function () {
        $('.pointer').css({
            'width': '80px',
            'height': '80px',
            'background': 'transparent',
            'box-shadow': '0 0 30px 0 #ef0d33',
            'filter': 'blur(1px)'
        });
    });

    $('.blog__block').mouseleave(function () {
        $('.pointer').css({
            'width': '10px',
            'height': '10px',
            'background': '#ef0d33',
            'box-shadow': 'none',
            'filter': 'blur(0)'
        });
    });

    $('.slick-arrow').mouseenter(function () {
        $('.pointer').css({
            'width': '80px',
            'height': '80px',
            'background': 'transparent',
            'box-shadow': '0 0 30px 0 #ef0d33',
            'filter': 'blur(1px)'
        });
    });

    $('.slick-arrow').mouseleave(function () {
        $('.pointer').css({
            'width': '10px',
            'height': '10px',
            'background': '#ef0d33',
            'box-shadow': 'none',
            'filter': 'blur(0)'
        });
    });

    $('.footer__link a').mouseenter(function () {
        $('.pointer').css({
            'width': '30px',
            'height': '30px'
        });
    });

    $('.footer__adress a').mouseenter(function () {
        $('.pointer').css({
            'width': '30px',
            'height': '30px'
        });
    });

    $('.footer__social a').mouseenter(function () {
        $('.pointer').css({
            'width': '30px',
            'height': '30px'
        });
    });

    var btn = $('#button');

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '1000');
    });

    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1000);
        return false;
    });
});