var index = 0;

$('.slider').each(function() {
    index++;
    $(this).attr('data-slider', index);

    $(this.slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: this.nav
    });

    $(this.nav).slick({
        //appendArrows: '.slider[data-slider="+ index +"] .slick-slide',
        //appendDots:  '.slider[data-slider="+ index +"] .slick-slide',

        //slidesToShow: 4,
        //slidesToScroll: 1,
        //asNavFor: this.slider,
        //dots: true,
        //arrows: true,
        //centerMode: false,
        //focusOnSelect: true
    });

    $(this).slick({
        appendArrows: '.slider[data-slider="+ index +"] .slick-slide',
        appendDots:  '.slider[data-slider="+ index +"] .slick-slide',
        arrows: true,
        dots:   true
    });
});