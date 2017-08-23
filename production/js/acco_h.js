$(function() {

	$('.menu-list__link').on('click', function(e) {
		e.preventDefault();

		var elem = $(e.target),
		item = elem.closest('.menu-list__item'),
		descrip = item.find('.menu-list__description'),
		items = item.siblings(),
		otherContent = items.find('.menu-list__description'),
		animWidth,
		reqWidth,
		windowWidth,
		itemsLength;
		

		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active')

			otherContent.css('width', 0);
			
			function result() {
				windowWidth = $(window).width(),
				itemsLength = $('.menu-list__item').width() * $('.menu-list__item').length;
				return reqWidth = windowWidth - itemsLength;
			}
			console.log(result());

			if ($(window).width() <= 768) {
				animWidth = reqWidth;
			} else {
				animWidth = '50vw'
			};
			// descrip.removeAttr('style');

			descrip.css({
				'width' :  animWidth
			});
		} else {
			item.removeClass('active')
			descrip.css({
				'width' :  0
			});
		}
		return false;
	});
});






