$(function() {

	$('.info-list__link').on('click', function(e) {
		e.preventDefault();

		var elem = $(e.target),
		item = elem.closest('.info-list__item'),
		descrip = item.find('.info-list__description'),
		reqHeight = item.find('.info-list__picture').outerHeight() + item.find('.info-list__occupation').outerHeight(),
		items = item.siblings(),
		otherContent = items.find('.info-list__description');

		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active')
			otherContent.css({
				'height': '0',
			});
			descrip.css({
				'height' : reqHeight + 25
			});
		} else {
			item.removeClass('active')
			descrip.css({
				'height' : 0
			});
		}

		console.log(reqHeight);
	});
});
