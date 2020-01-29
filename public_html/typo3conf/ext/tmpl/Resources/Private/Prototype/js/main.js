// function sliderNav() {
//     var i, slidesCount = $('.onepage-wrapper .section').length;
//
//     for (i = 0; i < slidesCount; i++) {
//         $(".slider-nav").append("<li class='slider-nav__item'></li>");
//
//     }
//     for (i = 0; i < slidesCount; i++) {
//         $('.slider-nav__item').each(function (index,el) {
//             $(this).attr('data-index', i++);
//             if (index === 0) {
//                 $(this).addClass('active');
//             }
//
//             $(el).on('click',function(){
//              //   console.log( $('.slider-nav__item').eq(index) );
// 	              $('.slider-nav__item').removeClass('active');
// 	              $(this).addClass('active');
//
//               });
//         });
//     }
// }

function textpageImages(){
  if( $('.js-textpage__imgs').length > 0 ){
    var rowImg = $('.js-textpage__imgs .row');
    hideImages(0,1);
  }

	function hideImages(row,img){
		for (var i = row; i < rowImg.length; i++) {
      var rowImgs = rowImg.eq(i).find('img');
			for (var j = img; j < rowImgs.length; j++) {
				//rowImgs.eq(j).hide('400');
				rowImgs.eq(j).remove('show');
				rowImgs.eq(j).addClass('hide');
			}
		}
	}

  // $(function () {
	 //  //var count=-1;
	 //  $('.js-gallery-btn').on('click', function(){
		// 	  var imgItems = $('.js-textpage__imgs .row-2').find('img');
		// 	  var imageShow = $('.js-textpage__imgs .row-2').find('img.show');
  //
		// 	  imgItems.eq(imageShow.length).removeClass('hide');
		// 	  imgItems.eq(imageShow.length).addClass('show');
	 //  });
  // });
}

function getFancybox(){

	if( $('a.js-gallery-btn').length > 0){
		$('a.js-gallery-btn').fancybox();
	}
}

$(document).ready(function(){

    if($('#main').length > 0) {
        $('#main').onepage_scroll({
            loop: false,
            responsiveFallback: 768,
            animationTime: 0,
            pagination: true,
            updateURL: false,
            delay: 400,
            beforeMove: function (index, forward, event) {
                if(!$('.header').hasClass('visible')) {
                    $('header').addClass('visible');
                }
                if( index > 1 ) {
                    $('.header').addClass('dark');
                } else if (index == 1 ) {
                    $('.header').removeClass('dark');
                    $('.footer').removeClass('open');
                }

                $('.section').removeClass('scrolled');
                $('.slider-nav__item').removeClass('active');

                if (forward == 'moveDown') {
                    $('.section[data-index='+ (index - 1) +']').addClass('scrolled');
                    $('.slider-nav__item[data-index='+ (index - 1) +']').addClass('active');


                    if (index == 2) {
                        $('.about-container').addClass('hidden');
                        $('video')[0].pause();
                    }

                    if (index ==4 ) {

                        function focusFunction(){
                            $('#focus').focus();
                        }

                        setTimeout(focusFunction, 1100);
                    }

                } else if (forward == 'moveUp') {
                    $('.section[data-index='+ (index + 1) +']').addClass('scrolled');
                    $('.slider-nav__item[data-index='+ (index - 1) +']').addClass('active');

                    if (index == 1) {
                        $('.about-container').removeClass('hidden');
                        $('.header').addClass('visible');
                        $('.about-container').addClass('visible');
                        $('.section-about').addClass('visible');
                    }
                }
            },

            afterMove: function(index) {
                if( index > 1 ) {
                    $('.footer').addClass('open');
                }

                if ( index == 4 ) {
                    $('.footer').removeClass('open');
                }


                $('.section').removeClass('current');
                $('.section.active').addClass('current');
            },
        });
    }

    $('.catalog__text').mCustomScrollbar();
    // $('.textpage-content').mCustomScrollbar();

    $("video").click(function(){
            this[this.paused?"play":"pause"]();
        }
    );

// if($('video').length  > 0) {
//   $("video").on("ended", function() {
//     $('.header').addClass('visible');
//     $('.about-container').addClass('visible');
//     $('.section-about').addClass('visible');
//   });
// }

    $('.video-vol-control').on('click', function(){
        $(this).toggleClass('on');
        if($("video")[0].muted){$('video')[0].muted = false} else {
            $('video')[0].muted = true;
        };
    });

    $(window).on('load', function() {
        setTimeout(function() {
            $('.preloader').fadeOut('slow', function() {
                if($('video').length  > 0 && $(window).width() > 767) {
                    $("video")[0].play();
                }
            });
        }, 400);
       // sliderNav();
	    getFancybox();
	    textpageImages();
    });


    $('.filter-form').on("mouseout", function(e){
		    if($(window).width() > 767 && ($(e.relatedTarget).closest('.filter-form').length < 1)){
			    $('.js-open-tab').removeClass('active');
			    $('.filter__items-outer').removeClass('active')
		    }
    });

    $('.js-open-tab').hover(function(e){


	    	if( !$(this).hasClass('is-active') ){

			    if( $(window).width() > 767 && !$(e.target).hasClass('js-filter__clear') ) {
				    $(this).addClass('active').siblings().removeClass('active');
				    var filtertype = $(this).data('filterType');
				    $('.filter__items-outer[data-filter-type='+ filtertype +']').addClass('active').siblings().removeClass('active');
			    }
		    }


    });

    $('.js-open-tab').on('click', function(){
	    if( !$(this).hasClass('is-active') ){
		    if( $(window).width() < 768 ) {
			    $(this).toggleClass('active').siblings().removeClass('active');
			    var filtertype = $(this).data('filterType');
			    $('.filter__items-outer[data-filter-type='+ filtertype +']').toggleClass('active').siblings().removeClass('active');
		    }
	    }
    });

    $('.js-xs-open-menu').on('click', function(){
        $('.filter-form').toggleClass('active')
    });

    $('body').on('click', function(e){
        if($(e.target).closest('.nav').length < 1) {
            $('.nav-ul').removeClass('open');
            $('.js-open-menu').removeClass('on');
        }

        if(!$(e.target).closest('.catalog-filter').length > 0) {
            if($(window).width() > 575) {
                $('.js-open-tab').removeClass('active');
                $('.filter__items-outer').removeClass('active');
            } else {
                $('.filter-form').removeClass('active');
            }
        }
    });

    $('.js-open-menu').on('click', function(){
        $(this).toggleClass('on');
        $('.nav-ul').toggleClass('open');
    });

    if($(window).width() < 768) {
        $('.card-table').mCustomScrollbar({axis:"x"});
    };

    if($(window).width() < 576) {
        $('[data-filter-type=1]').addClass('active');

        if($('.textpage-content').length > 0) {
            $('.textpage-content').mCustomScrollbar("destroy");
        }
    }

    $('.section-oil div.oil__item').on('click', function(){
        $('.modal-products').addClass('active');
    });

    $('.filter__items').on('click', 'div', function (){
        // alert($('span', this).text());
	      var activeTab = $(this).closest('.filter__items-outer').data('filter-type');
	      var tabs = $('.filter-tabs .filter__title');

	      tabs.eq(activeTab-1).removeClass('active is-active');
	      tabs.eq(activeTab-1).addClass('is-active');
	      $(this).closest('.filter__items-outer').removeClass('active');

        $(this).addClass('selected')
	      .siblings().removeClass('selected');
	      alert($('span', this).text());

    });

    $('.js-filter__clear').on('click',function(e){
	    e.preventDefault();

	    var activeTab = $(this).parent().data('filter-type');
	    var tabsContent = $('.filter__items-outer');

	    $(this).parent().removeClass('is-active');
	    $(this).parent().removeClass('active');
	    tabsContent.eq(activeTab-1).find('.selected').removeClass('selected');
    });

    $('.js-open-tab').on('click', function () {
	    // var tabsContent = $('.filter__items-outer.active');
	    // $(this).removeClass('is-active');
	    //
	    // tabsContent.find('.selected').removeClass('selected');
    });

    $('.close-products').on('click', function(){
        $(this).parents().removeClass('active');
    });

    $('.modal-close').on('click', function(){
        $(this).closest('.modal-outer').removeClass('active')
    });

    $('.modal-outer').on('click', function(e){
        if($(e.target).hasClass('modal-outer')) {
            $(this).removeClass('active');
        }
    });

    $('.search-form').on('submit', function(e){
        e.preventDefault();
    });

    if( $('#map').length > 0 ){
	    ymaps.ready(init);
	    var myMap;

	    function init() {
		    myMap = new ymaps.Map("map", {
				    center: [55.76, 37.64],
				    zoom: 10,
				    controls: ['zoomControl']
			    },
			    {suppressMapOpenBlock: true});

		    myMap.behaviors.disable('scrollZoom');
	    }
    }

    if( $('.map-form').length > 0 ){
	    $('.map-input__text').autocomplete({
		    lookup: countries,
		    onSelect: function (sug) {
			    myMap.panTo(sug.center, {flying: 1, duration: 1500}).then(function () {;
				    for (var i = 0; i < sug.dealers.length; i++) {
					    var cord = sug.dealers[i].cord;
					    var text = sug.dealers[i].text;
					    var title = sug.dealers[i].title;
					    var href = sug.dealers[i].href;

					    var myPlacemark = new ymaps.Placemark([cord.x, cord.y], {
						    hintContent: 'Содержимое всплывающей подсказки',
						    balloonContent: '<div><h3>'+ title +'</h3><p>'+ text + '</p><a class="ballon-link" href='+ href +'>Подробнее</a></div>'
					    });
					    myMap.geoObjects.add(myPlacemark);
				    }
			    }, this)
		    }
	    });
    }
});
