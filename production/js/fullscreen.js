$(document).ready(function() {

	$('.hamb-menu').on('click', function(e) {
		e.preventDefault();

		var fsMenuActive = $(e.target).closest('.maincontent').next('.hamburger-menu').addClass('active');
		fsMenuActive.find('.nav').addClass('active').slideDown(600);
	});

	$('.hamburger-menu__close').on('click', function(e) {
		e.preventDefault();
		$('.hamburger-menu').removeClass('active').find('.nav').removeClass('active').slideUp(100);
	});

	$('.nav__link').on('click touchstart', function(e) {
		$('.hamburger-menu').removeClass('active').find('.nav').removeClass('active').slideUp(100);
	});
});


