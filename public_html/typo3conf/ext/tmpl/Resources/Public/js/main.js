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

  function scrollPages() {
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

  }

   scrollPages();



    $('.catalog__text').mCustomScrollbar();

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


// OPEN TAB category DESKTOP
    $('.js-open-tab').hover(function(e){


	    	if( !$(this).hasClass('is-active') ){

			    if( $(window).width() > 767 && !$(e.target).hasClass('js-filter__clear') ) {
				    $(this).addClass('active').siblings().removeClass('active');
				    var filtertype = $(this).data('filterType');
				    $('.filter__items-outer[data-filter-type='+ filtertype +']').addClass('active').siblings().removeClass('active');
				 //   $('.filter__items-outer[data-filter-type='+ filtertype +']').addClass('active');
				 //   var sibl = $('.filter__items-outer[data-filter-type='+ filtertype +']').siblings();
//alert(sibl.html())


			    }
		    }
    });

// OPEN TAB category MOBILE
    $('.js-open-tab').on('click', function(e){
	    if( !$(this).hasClass('is-active') ){
		    if( $(window).width() < 768 && !$(e.target).hasClass('js-filter__clear') ) {
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


    function filterObj() {
        var filtes_success = true;

        var filter_name_1 = $('.filter__title').eq(0).data('filter_class');
        if(filter_name_1 != undefined) filter_name_1 = filter_name_1.replace('premission', 'perm')

        var filter_name_2 = $('.filter__title').eq(2).data('filter_class');
        if(filter_name_2 != undefined) filter_name_2 = filter_name_2.replace('oilness', 'oil')

        var filter_name_3 = $('.filter__title').eq(1).data('filter_class');

        var filter_name_4 = $('.filter__title').eq(3).data('filter_class');

        var success_find  = false;
        $('.catalog-items').children().each(function () {
            var success = true;

            if (filter_name_1 != undefined && filter_name_1 != '') {
               if (!$(this).hasClass(filter_name_1)){
                   success = false;
               }
            }
            if (filter_name_2 != undefined && filter_name_2 != '') {
               if (!$(this).hasClass(filter_name_2)){
                   success = false;
               }
            }
            if (filter_name_3 != undefined && filter_name_3 != '') {
               if (!$(this).hasClass(filter_name_3)){
                   success = false;
               }
            }
            if (filter_name_4 != undefined && filter_name_4 != '') {
               if (!$(this).hasClass(filter_name_4)){
                   success = false;
               }
            }

            if(success){
                success_find = true;
               $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
        if(success_find == false){
            alert('С указанными фильтрами товаров не обнаружено.\n Попробуйте изменить настройки фильтров.');
        }
    }





    $('.filter__items').on('click', 'div', function (){

        // ��������
        var filter_by_class = $(this).attr('class');

        // alert($('span', this).text());
	      var activeTab = $(this).closest('.filter__items-outer').data('filter-type');
	      var tabs = $('.filter-tabs .filter__title');

	      tabs.eq(activeTab-1).removeClass('active is-active');
	      //tabs.eq(activeTab-1).addClass('is-active');
		tabs.eq(activeTab - 1).addClass('is-active').data('filter_class', filter_by_class);

	      $(this).closest('.filter__items-outer').removeClass('active');

        $(this).addClass('selected')
	      .siblings().removeClass('selected');
	      //alert($('span', this).text());
        filterObj();


    });

// OPEN TAB category CLEAR
    $('.js-filter__clear').on('click',function(e){
	    e.preventDefault();
	    var activeTab = $(this).parent().data('filter-type');
	    var tabsContent = $('.filter__items-outer');

	    //$(this).parent().removeClass('is-active');
		$(this).parent().removeClass('is-active').data('filter_class', '');

	    $(this).parent().removeClass('active');
	    tabsContent.eq(activeTab-1).find('.selected').removeClass('selected');

		filterObj();
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
				    center: [60.362281,85.636372],
				    zoom: 4,
				    controls: ['zoomControl']
			    },
			    {suppressMapOpenBlock: true});

		    myMap.behaviors.disable('scrollZoom');

        for(var i = 0; i < countries.length; i++) {
          var sug = countries[i];
          if (sug.dealers) {

            for(var j = 0; j < sug.dealers.length; j++) {
              var cord = sug.dealers[j].cord;
              var text = sug.dealers[j].text;
              var title = sug.dealers[j].title;
              var href = sug.dealers[j].href;
              var imgHref = sug.dealers[j].imgHref;

              var myPlacemark = new ymaps.Placemark([cord.x, cord.y], {
                hintContent: 'Содержимое всплывающей подсказки',
                balloonContent: '<div><h3>'+ title +'</h3><p>'+ text + '</p><a class="ballon-link" href='+ href +'>Подробнее</a></div>'
              }, {
                iconLayout: 'default#image',
                iconImageHref: imgHref,
                iconImageSize: [52, 42],
                iconImageOffset: [-5, -38]
              });

              myPlacemark.events.add('click', function (e) {
                var coords = e.get('target').geometry.getCoordinates();
                    myMap.setZoom(9, {flying: 1, duration: 1500});
          			    myMap.panTo(coords, {flying: 1, duration: 1500});
                    setTimeout(function () {
                      myMap.setCenter(coords);
                    }, 500);
              });
              myMap.geoObjects.add(myPlacemark);
            }
          }
        }
	    }
    }

    // console.log(countries);

    if( $('.map-form').length > 0 ){
	    $('.map-input__text').autocomplete({
		    lookup: countries,
		    onSelect: function (sug) {
          // myMap.setCenter(sug.center);
          myMap.setZoom(9, {duration: 10000});

			    myMap.panTo(sug.center, {flying: 1, duration: 1500}).then(function () {
				    // for (var i = 0; i < sug.dealers.length; i++) {
					   //  var cord = sug.dealers[i].cord;
					   //  var text = sug.dealers[i].text;
					   //  var title = sug.dealers[i].title;
					   //  var href = sug.dealers[i].href;
          
					   //  var myPlacemark = new ymaps.Placemark([cord.x, cord.y], {
						  //   hintContent: 'Содержимое всплывающей подсказки',
						  //   balloonContent: '<div><h3>'+ title +'</h3><p>'+ text + '</p><a class="ballon-link" href='+ href +'>Подробнее</a></div>'
					   //  });
					    myMap.geoObjects.add(myPlacemark);
              // myMap.setZoom(9, {duration: 10000});
				    // }
			    }, this)
		    }
	    });

      $('.autocomplete-suggestions').on('mouseover', function(event) {
        $(document).off('mousewheel');
      }).on('mouseleave', function(event) {
          $('.autocomplete-suggestions').hide();
          scrollPages();
      });

    }

});