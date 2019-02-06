var composition = $('.composition'),
	burger_open_close = $('.burger-open__close');

composition.on( "click", function() {

	if($(this).siblings('.burger-open').css('display') == 'none'){
		$(this).siblings('.burger-open').css('display', 'block');
		$(this).css("background-color", "#e35028");
	}
	else{
		$(this).siblings('.burger-open').css('display', 'none');
		$(this).css("background-color", "#f08c33");
	}
	
});

burger_open_close.on('click', function () {
	$(this).closest(".burger-open").css('display', 'none');
	$(this).closest(".burger-open").siblings('.composition').css("background-color", "#f08c33");
});