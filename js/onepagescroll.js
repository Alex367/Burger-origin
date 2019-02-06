//add to first_screen height 100%

const section = $('.section');
const display = $('.main-content');
let inscroll = false;

const aside_section = $('.fixed-menu__item');

const perTransition = sectionEq => {

if(inscroll) return;

inscroll = true;

// sectionEq = parseInt(sectionEq);

const position  = (sectionEq * -100) + '%';

section
	.eq(sectionEq)
	.addClass('active')
	.siblings()
	.removeClass('active');

aside_section
	.eq(sectionEq)
	.addClass('active')
	.siblings()
	.removeClass('active');

	setTimeout(function() {
		inscroll = false;
	}, 1500);

	display.css({
		'transform' : `translateY(${position})`
	});
}

const defineSections = section => {
	const activeSection = section.filter('.active');

	return{
		activeSection : activeSection,
		nextSection : activeSection.next(),
		prevSection : activeSection.prev()
	}
}

const scrollToSection = direction => {
	const sections = defineSections(section);
	// const activeSection = section.filter('.active');
	// const prevSection = activeSection.prev();
	// const nextSection = activeSection.next();
	if(direction == 'up' && sections.nextSection.length){
		perTransition(sections.nextSection.index());
	}

	if(direction == 'down' && sections.prevSection.length){
		perTransition(sections.prevSection.index());
	}
}

$('.wrapper').on('wheel', e =>{

	const deltaY = e.originalEvent.deltaY;

	if(deltaY > 0){
		scrollToSection('up');
	}

	if(deltaY < 0){
		scrollToSection('down');
	}
});

$(document).on('keydown', e =>{
	// const activeSection = section.filter('.active');
	// const prevSection = activeSection.prev();
	// const nextSection = activeSection.next();
	const sections = defineSections(section);

	switch(e.keyCode){
		case 40:
			scrollToSection('up')
			break;
		case 38:
			scrollToSection('down')
			break;
	}
});

$('[data-scroll-to]').on('click', e => {
	e.preventDefault();
	const sectionNum = $(e.currentTarget).attr('data-scroll-to');

	perTransition(sectionNum);
});