$(function() {

	$('.menu-list__link').on('click', function(e) {
		e.preventDefault();

		var elem = $(e.target),
		item = elem.closest('.menu-list__item'),
		descrip = item.find('.menu-list__description'),
		reqHeight = item.find('.menu-list__text').outerWidth(),
		textAccoH = item.find('.menu-list__text'),
		items = item.siblings(),
		otherContent = items.find('.menu-list__description');


		if(window.matchMedia('(max-width: 1100px)').matches)
		{
			if (!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active')
				otherContent.css({
					'width': 0,
				});
				descrip.css({
					'width' : '100%'
				});
			} else {
				item.removeClass('active')
				descrip.css({
					'width' : 0
				});
			}
			return false;
		};
	});
});
