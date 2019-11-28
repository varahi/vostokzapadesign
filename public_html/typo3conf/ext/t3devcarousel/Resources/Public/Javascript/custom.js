$.each(sliders, function() {
    $(this.slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: this.nav
    });
    $(this.nav).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: this.slider,
        dots: true,
        arrows: true,
        centerMode: false,
        focusOnSelect: true
    });
});