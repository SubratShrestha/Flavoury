$(document).ready(function() {
    var home = true;
    /* Sticky navigations, appear when past first section. */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            home = false;
            $('nav').addClass('sticky');
            $('.stick').addClass('active');
        }
        else {
            home = true;
            $('nav').removeClass('sticky');
            $('.stick').removeClass('active');
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
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const pages = document.querySelectorAll('.mobile-link');
    const stick = document.querySelector('.stick');

    hamburger.addEventListener('click', () => {
        if (home == false)
            stick.classList.toggle('active');
            document.querySelector('#hello').style.boxShadow = 'none';

        navLinks.classList.toggle('open');
        links.forEach(link => {
            navLinks.classList.toggle('open');
            link.classList.toggle("fade");
        });
    });

    pages.forEach(page => {
        page.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            links.forEach(link => {
                navLinks.classList.toggle('open');
                link.classList.toggle("fade");
            });
        });
    });
});
