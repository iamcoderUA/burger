$(function() {
	$('[data-fancybox]').fancybox();
	$('.review__close').on('click', function(e){
		e.preventDefault();
		$.fancybox.close();
	});
	
	// $('.form-popup__close').on('click', function(e){
	// 	e.preventDefault();
	// 	$.fancybox.close();
	// });
});
  