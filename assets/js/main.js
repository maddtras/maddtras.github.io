/* ============= Navbar White =========*/
$(document).ready(function () {
	'use strict';

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.navbar-light').addClass('nav-white');
		} else if (scroll < '20') {
			$('.navbar-light').removeClass('nav-white');
		}
	});
	$(document).ready(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.navbar-light').addClass('nav-white');
		} else if (scroll < '20') {
			$('.navbar-light').removeClass('nav-white');
		}
	});

	setTimeout(function () {
		$('.navbar-brand').addClass('animate');
	}, 1000);
	setTimeout(function () {
		$('.navbar-nav li ').addClass('animate');
	}, 1100);
});
/*=========== page load animation ==========*/
$('.animated').each(function () {
	$(this).appear(function () {

		var element = $(this);

		var animation = element.attr('data-animation');
		if (!element.hasClass('visible')) {
			var animationDelay = element.attr('data-animation-delay');
			setTimeout(function () {
				element.addClass(animation + ' visible');
			}, animationDelay);
		}
	});

});

/* ============= Testimonial Slider =========*/

$(document).ready(function () {
	'use strict';
	$('.testimonial-slider').slick({
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		prevArrow: $(".slick-arrow-left"),
		nextArrow: $(".slick-arrow-right"),
		fade: true,
		autoplay: false,
		centerMode: true,
		centerPadding: 0,
		initialSlide: 0,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1
			}
		}]
	});


});
function toggleIcon(e) {
	$(e.target)
		.prev('.panel-heading')
		.find(".more-less")
		.toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


/*=======bottom menu====*/
$(".f-btn").click(function(){
  $(".s-list").slideToggle();
  $(this).toggleClass('active');
});