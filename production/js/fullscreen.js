$(document).ready(function() {

	$('.hamb-menu').on('click', function(e) {
		e.preventDefault();

		$(e.target).closest('.maincontent').next('.hamburger-menu').addClass('active');
		// fsMenuActive.fadeIn('fast/fast', function() {
		// 	fsMenuActive.css('opacity', '1');
		// });
		// fsMenuActive.css('display', 'flex');
	});

	$('.hamburger-menu__close').on('click', function(e) {
		e.preventDefault();
		
		$(e.target).closest('.hamburger-menu').removeClass('active');
		// fsMenuClose.fadeOut('100', function() {
		// 	fsMenuClose.css('opacity', '0');
		// });
		// fsMenuClose.css('display', 'none');
	});
});
