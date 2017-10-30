$(function($){
	$('.next-page__image').click(function(e){
		e.preventDefault();
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset({top: '100px'})}, 1000);
		return false;
	});
});