$(document).ready(function() {

	$('.hamb-menu').on('click', function(e) {
		e.preventDefault();

		var fsMenuActive = $(e.target).closest('.maincontent').next('.hamburger-menu').addClass('active'),
				navOpen =	fsMenuActive.find('.nav').addClass('active');
				navOpen.slideDown(600);
	});

	$('.hamburger-menu__close').on('click', function(e) {
		e.preventDefault();
		
		var fsMenuClose = $(e.target).closest('.hamburger-menu').removeClass('active');
				navClose = fsMenuClose.find('.nav').removeClass('active');
				navClose.slideUp(100);
	});

	$('.nav__link').on('click', function(e) {
		// e.preventDefault();

		var fsMenuClose = $(e.target).closest('.hamburger-menu').removeClass('active');
				navClose = fsMenuClose.find('.nav').removeClass('active');
				navClose.slideUp(100);
	});
});
