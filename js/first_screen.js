window.onload = function() {
	//delete transition's preload
	var body_delete = document.getElementById('body-preload');
	body_delete.classList.remove('preload');
};

//delivery
const myForm = document.querySelector('#myForm');
const order = document.querySelector('#delivery-send');
const message_delivery = document.querySelector('.delivery-ok');
const wrapper = document.querySelector('.wrapper');
const close_message = document.querySelector('.btn-delivery');
const message_text = document.querySelector('.delivery-ok__message-text');

var selector = document.getElementById("delivery-phone");
var im = new Inputmask("9(999)999-99-99");
im.mask(selector);

$(document).ready(function(){
  // $(selector).inputmask("99-9999999");  //static mask
  $(selector).inputmask({"7": "(999) 999-9999"}); //specifying options
  // $(selector).inputmask("9-a{1,3}9{1,3}"); //mask with dynamic syntax
});

var bool_message = true;
var bool_message_error = true;

close_message.addEventListener('click', function(event){
	if (bool_message == false) {
		message_delivery.style.display = 'none';
		bool_message = true;
		myForm.reset();
	}
	else if (bool_message_error == false) {
		message_delivery.style.display = 'none';
		bool_message_error = true;
	}
});

order.addEventListener('click', function(event){
	event.preventDefault();

	if(validateForm(myForm)){
		const data = {
			name: myForm.elements.Name.value,
			phone: myForm.elements.Phone.value,
			comment: myForm.elements.Comment.value
		};
		console.log(data);
		message_text.textContent="Сообщение отправлено!";
		message_delivery.style.display = 'block';
		bool_message = false; //open
	}
	else{
		message_text.textContent="Заполните все поля!";
		console.log("It's mistake");
		message_delivery.style.display = 'block';
		bool_message_error = false;
	}
});

function validateForm(form){
	let val = true;

	if(!validateField(form.elements.Name)){
		val = false;
	}
	if(!validateField(form.elements.Phone)){
		val = false;
	}
	if(!validateField(form.elements.Street)){
		val = false;
	}
	if(!validateField(form.elements.House)){
		val = false;
	}
	if(!validateField(form.elements.Building)){
		val = false;
	}
	if(!validateField(form.elements.Apartment)){
		val = false;
	}
	if(!validateField(form.elements.Comment)){
		val = false;
	}
	return val;
}

function validateField(field){
	if(!field.checkValidity()){
		return false;
	}
	else{
		return true;
	}
}

// section scroll
var menu_selector = ".fixed-menu";
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " li.active").removeClass("active");
			$(this).closest("li").addClass("active");
		} 
		else {
			$(this).closest("li").removeClass("active");
		}
	});
}

$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$('a[href^="#"]').click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " li.active").removeClass("active");
		$(this).closest("li").addClass("active");

		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});
});