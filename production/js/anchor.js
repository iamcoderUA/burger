$(function($){
	$('.next-page__image').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset().top}, 1000);
		return false;
	});
});