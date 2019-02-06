//3_line_first_screen
const menu = $('.header-buttons__hide'),
		div = $('#open-menu-id'),
		open = $('.open-menu__img-exit-mobile');

menu.on("click", function() {
  div.css("display", "block");
});
open.on("click", function() {
    div.css("display", "none");
});

$('[data-scroll-to]').on('click', e => {
	div.css("display", "none");
});