$(document).ready(function() {

	function removeNbsp($el) {
		  $el.contents().each(function() {
		    if (this.nodeType === 3) {
		      this.nodeValue = this.nodeValue.replace(/\u00A0/g, ' ');
		    } else {
		      removeNbsp( $(this) );
		    }
		  });
	}
	removeNbsp( $('html') );	
	
	//$("td").each(function() {
	//    var $this = $(this);
	//    $this.html($this.html().replace(/&nbsp;/g, ''));
	//});
	
	// Mmenu
	/*
	$('nav#menu').mmenu({
		extensions				: [ 'popup' ],
		keyboardNavigation 		: true,
		screenReader 			: true,
		counters				: true,
		navbar 	: {
			title	: 'Меню'
		},
		navbars	: [
		   {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}, {
				position	: 'bottom',
				content		: [
					''
				]
			}
		]
	});
	*/

});


//$('.content').html( $('.content').html().split('&nbsp').join('') );
