// window.onload = function() {
// 	$('.reviews-elements__items').addClass('loaded');
// };
// function imgLoaded(img){
//     var $img = $(img);
//     $img.parent().addClass('loaded');
// };
$('.reviews-elements__items').ready(function(){
	$('.reviews-elements__items').addClass('loaded');
});

var rev_open = $('.reviews-message');
var rev_close = $('.btn-reviews');

//reviews
var reviews_elements__items = $('.reviews-elements__items');
var reviews_elements__hover = $('.reviews-elements__hover');

reviews_elements__items.on( "click", function() {
	if($(this).children('.reviews-elements__hover').hasClass('rev-hover-2')){
		$(this).children('.reviews-elements__hover').removeClass('rev-hover-2');
	}
	else{
		if($(this).siblings('.reviews-elements__items').children('.reviews-elements__hover').hasClass('rev-hover-2')){
			return;
		}
		else{$(this).children('.reviews-elements__hover').addClass('rev-hover-2');}
	}
});

$('[reviews-more]').on('click', e => {
	e.preventDefault();
	rev_open.css("display", "block");
});

rev_close.on("click", function() {
    rev_open.css("display", "none");
});