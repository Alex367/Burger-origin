var team_elements__items = $('.team-elements__items');

team_elements__items.on('click', function () {

	if($(this).hasClass('team-elements__items-active')){
		$(this).children('.team-elements__hover').height(0);
		$(this).find('.team-elements__arrow').css('-webkit-transform', 'rotate(0deg)');
		$(this).children('.team-elements__name').css('color', '#ffffff');
		$(this).removeClass('team-elements__items-active');
	}
	else{
		if($(this).siblings().hasClass('team-elements__items-active')){
			return;
		}
		else{
			$(this).children('.team-elements__hover').height(180);
			$(this).find('.team-elements__arrow').css('-webkit-transform', 'rotate(180deg)');
			$(this).children('.team-elements__name').css('color', '#f9b43b');
			$(this).addClass('team-elements__items-active');
		}
	}

});