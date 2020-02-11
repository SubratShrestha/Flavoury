$(document).ready(function() {
    /* Sticky navigations, appear when past first section. */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* Animated scroll according to anchors */
    $(function () {
        $( 'a[href*="#"]:not([href="#"])' ).click( function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                   if (target.length) {
                     $('html,body').animate({
                         scrollTop: target.offset().top
                    }, 0);
                    return false;
                }
            }
        });
    });


    /* Sliding animation of features. */
    $('.js--wp-features').waypoint(function (direction) {
        $('.js--wp-features').addClass('animated fadeInUp');
    }, {offset: '60%'})

    /* Sliding animation of phone. */
    $('.js--wp-phone').waypoint(function (direction) {
        $('.js--wp-phone').addClass('animated slideInUp');
    }, {offset: '60%'})

    /* Pulse animation for premium plan. */
    $('.js--wp-premium').waypoint(function (direction) {
        $('.js--wp-premium').addClass('animated pulse');
    }, { offset: '40%' })


    /* Mobile Navigation. */
    /* Hamburger. */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--nav');
        nav.slideToggle(200);
        $('.js--nav-icon').css("display", "none");
        $('.js--x').css("display", "block");
    })

    /* Closing. */
    $('.js--x').click(function () {
        var x = $('.js--nav');
        x.slideToggle(200);
        $('.js--x').css("display", "none");
        $('.js--nav-icon').css("display", "block");
    })

    /* Closing of nav bar when one of the links are clicked.
    $('.mobile-link').click(function () {
        if (newWindowWidth < 510) {
            $('.js--nav').slideToggle(200);
            $('.js--x').css("display", "none");
            $('.js--nav-icon').css("display", "block");
        }
    })*/
});
