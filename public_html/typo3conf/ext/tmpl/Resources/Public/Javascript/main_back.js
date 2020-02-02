jQuery(function($){
// Mask for input phones
   $("#powermail_field_phone").mask("+7(999) 999-9999");
   $("#powermail_field_feedback_phone").mask("+7(999) 999-9999");
   $("#powermail_field_order_phone").mask("+7(999) 999-9999");

// Main menu
	$('#main-menu').smartmenus({
		mainMenuSubOffsetX: -1,
		mainMenuSubOffsetY: 4,
		subMenusSubOffsetX: 6,
		subMenusSubOffsetY: -6
	});	
	
// To Top	
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
	    	} else {
	    		$('#toTop').fadeOut();
	    	}
		});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
	
//Table headers
	$("tr:first").addClass("table-th");
	$( "tr:odd" ).addClass("tr-odd");
	$( "tr:even" ).addClass("tr-even");
	

// Disable Google map scroll
	$('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready     
	$('#overlay').on("mouseup",function() {          // lock it when mouse up
	$('#map').addClass('scrolloff'); 
	//somehow the mouseup event doesn't get call...
   });
   $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
   	$('#map').removeClass('scrolloff');
   });

   $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
   	$('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
	});	
      
});



//$(function() {
//$('#main-menu').smartmenus();
//});

/*
$(function() {
	$('.navbar-toggler').click(function() {	
		if($('#navbar-header').hasClass('in')) {
			$(".bg-innactive").removeClass("bg-active");
		 } else {
			 $(".bg-innactive").addClass("bg-active");
		 }
		
	});	
});
*/