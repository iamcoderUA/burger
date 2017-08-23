$(function() {

	$('.menu-list__link').on('click', function(e) {
		e.preventDefault();

		var elem = $(e.target),
		item = elem.closest('.menu-list__item'),
		descrip = item.find('.menu-list__description'),
		items = item.siblings(),
		otherContent = items.find('.menu-list__description'),
		animWidth,
		windowWidth = $(window).width(),
		itemsLength = $('.menu-list__link').width() * $('.menu-list__item').length,
		reqWidth = windowWidth - itemsLength;

		if ($(window).width() <= 768) {
			animWidth = reqWidth;
		} else {
			animWidth = '45vw'
		};
		
		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active')

			otherContent.css('width', 0);
			descrip.css({
				'width' :  animWidth
			});
		} else {
			item.removeClass('active')
			descrip.css({
				'width' :  0
			});
		}
	});
});






