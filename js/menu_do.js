var menu_acco__items = $('.menu-acco__items');

menu_acco__items.on('click', function () {
	if($(this).children('.menu-acco__link').width() == 80){
		if($(this).hasClass('menu-acco__items-active')){
			$(this).removeClass('menu-acco__items-active');
			$(this).width('');
			$(this).children('.menu-acco__link').css('z-index', '');
			$(this).children('.menu-acco__items-hide').removeClass('menu-acco__items-hide-active');
			$(this).children('.menu-acco__content').removeClass('menu-acco__content-active');
			$(this).find('.link-text-hover').css('color', '#ffffff');
		}
		else{//check another item, open or no
			if($(this).siblings().hasClass('menu-acco__items-active')){
				return;
			}
			else{//no
				$(this).addClass('menu-acco__items-active');
				$(this).width('50%');
				$(this).children('.menu-acco__link').css('z-index', 1);
				$(this).children('.menu-acco__items-hide').addClass('menu-acco__items-hide-active');
				$(this).children('.menu-acco__content').addClass('menu-acco__content-active');
				$(this).find('.link-text-hover').css('color', '#eead3b');
			}
		}
	}
	else{//phone
		if($(this).children('.menu-acco__content').width() == 0){
			$(this).css('position', 'unset');
			$(this).children('.menu-acco__link').addClass('menu-acco__link-active');
			$(this).children('.menu-acco__items-hide').addClass('menu-acco__items-hide-phone');
			$(this).children('.menu-acco__content').addClass('menu-acco__content-phone');
			$(this).find('.section-menu').addClass('section-menu-phone');
			$(this).find('.link-text-hover').css('color', '#eead3b');
		}
		else if($(this).children('.menu-acco__content').hasClass('menu-acco__content-phone')){
			$(this).css('position', 'relative');
			$(this).children('.menu-acco__link').removeClass('menu-acco__link-active');
			$(this).children('.menu-acco__items-hide').removeClass('menu-acco__items-hide-phone');
			$(this).children('.menu-acco__content').removeClass('menu-acco__content-phone');
			$(this).find('.section-menu').removeClass('section-menu-phone');
			$(this).find('.link-text-hover').css('color', '#ffffff');
		}
	}
});