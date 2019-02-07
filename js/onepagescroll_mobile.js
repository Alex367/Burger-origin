// const section = $('.section');
// const display = $('.main-content');
// let inScroll = false;

// const mobileDetect = new MobileDetect(window.navigator.userAgent);
// const isMobile = mobileDetect.mobile();



// if (isMobile) {
// 	const setActiveMenuItem = itemEq => {
//   $('.fixed-menu__item').eq(itemEq).addClass('active')
//     .siblings().removeClass('active')
// } 

// const performTransition = sectionEq => {
//   const position = `${sectionEq * -100}%`;

//   if (inScroll) return;

//   inScroll = true;

//   section
//     .eq(sectionEq)
//     .addClass("active")
//     .siblings()
//     .removeClass("active");

//   display.css({
//     transform: `translate(0, ${position})`,
//     "-webkit-transform": `translate(0, ${position})`
//   });

//   setTimeout(() => {
//     inScroll = false;
//     setActiveMenuItem(sectionEq);
//   }, 700); // продолжительность анимации + 300ms - потому что закончится инерция
// };

// const scrollToSection = direction => {
//   const activeSection = section.filter('.active');
//   const nextSection = activeSection.next();
//   const prevSection = activeSection.prev();

//   if (direction === "up" && prevSection.length) {
//     performTransition(prevSection.index());
//   }

//   if (direction === "down" && nextSection.length) {
//     performTransition(nextSection.index());
//   }
// };

// $(document).on({
//   wheel: e => {
//     const deltaY = e.originalEvent.deltaY;
//     const direction = deltaY > 0 ? "down" : "up";

//     scrollToSection(direction);
//   },
//   keydown: e => {
//     switch (e.keyCode) {
//       case 40:
//         scrollToSection("down");
//         break;

//       case 38:
//         scrollToSection("up");
//         break;
//     }
//   },
//   touchmove: e => e.preventDefault()

//   // touchstart touchend touchmove 
// });


// // $('[data-scroll-to]').on('click', e => {
// //   e.preventDefault();

// //   const target = parseInt($(e.currentTarget).attr('data-scroll-to'));


// //   performTransition(target);

// // })
//   $(document).swipe({
//     swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
//       /**
//        * плагин возвращает фактическое...
//        * ...
//        */
//       const scrollDirection = direction === 'down' ? 'up' : 'down';
      
//       scrollToSection(scrollDirection);
//     }
//   });
// }




// //add to first_screen height 100%

// const md = new MobileDetect(window.navigator.userAgent);
// const isMobile = md.mobile();

// const section = $('.section');
// const display = $('.main-content');
// let inscroll = false;

// const aside_section = $('.fixed-menu__item');

// const perTransition = sectionEq => {

// if(inscroll) return;

// inscroll = true;

// // sectionEq = parseInt(sectionEq);

// const position  = (sectionEq * -100) + '%';

// section
// 	.eq(sectionEq)
// 	.addClass('active')
// 	.siblings()
// 	.removeClass('active');

// // aside_section
// // 	.eq(sectionEq)
// // 	.addClass('active')
// // 	.siblings()
// // 	.removeClass('active');

// 	setTimeout(function() {
// 		inscroll = false;
// 	}, 1300);

// 	display.css({
// 		'transform' : `translateY(${position})`
// 	});
// }

// const defineSections = section => {
// 	const activeSection = section.filter('.active');

// 	return{
// 		activeSection : activeSection,
// 		nextSection : activeSection.next(),
// 		prevSection : activeSection.prev()
// 	}
// }

// const scrollToSection = direction => {
// 	const sections = defineSections(section);
// 	// const activeSection = section.filter('.active');
// 	// const prevSection = activeSection.prev();
// 	// const nextSection = activeSection.next();
// 	if(direction == 'up' && sections.nextSection.length){
// 		perTransition(sections.nextSection.index());
// 	}

// 	if(direction == 'down' && sections.prevSection.length){
// 		perTransition(sections.prevSection.index());
// 	}
// }

// $('.wrapper').on({ //*
// 	wheel: e => {
// 		const deltaY = e.originalEvent.deltaY;
// 		const direction = (deltaY > 0) 
// 		? 'up' 
// 		: 'down';
// 		scrollToSection(direction);
// 	},
// 	touchmove: e => (e.preventDefault())
// });

// // $(document).on('keydown', e =>{
// // 	const sections = defineSections(section);

// // 	switch(e.keyCode){
// // 		case 40:
// // 			scrollToSection('up')
// // 			break;
// // 		case 38:
// // 			scrollToSection('down')
// // 			break;
// // 	}
// // });

// // $('[data-scroll-to]').on('click', e => {
// // 	e.preventDefault();
// // 	const sectionNum = $(e.currentTarget).attr('data-scroll-to');

// // 	perTransition(sectionNum);
// // });


// if(isMobile){
// 	$(window).swipe( { //*
//     swipe:function(
//     	event,  
//     	direction, 
//     	distance, 
//     	duration, 
//     	fingerCount, 
//     	fingerData) 
//     {
//     	scrollToSection(direction);
//     }
//   });
// }