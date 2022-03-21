$(function() {

    // Fixed header
    let header = $("#header"); //declare a variable
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let csrollpos = $(window).scrollTop();

    checkScroll(csrollpos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        csrollpos = $(this).scrollTop();
        checkScroll(csrollpos, introH);
    })

    function checkScroll(csrollpos, introH) {

        if( csrollpos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 800);

    });

    // Nav Toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle"); 
    
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Reviews
    let slider = $("#reviewsslider");

    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplaySpeed: 2000
      });

});
