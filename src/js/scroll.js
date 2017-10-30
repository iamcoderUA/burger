$(function() {

	var sections = $('section'),
			main = $('.maincontent'),
			isInScroll = false;
			md = new MobileDetect(window.navigator.userAgent),
			isMobile = md.mobile();

	var performTransition = function(sectionEq){
		if (isInScroll) return
			isInScroll = true;
			var position = (sectionEq * -100) + '%';

			main.css({
				'transform' : 'translateY(' + position + ')',
				'-webkit-transform' : 'translateY(' + position + ')'
			})

			sections.eq(sectionEq).addClass('active')
			.siblings().removeClass('active');	

			setTimeout(function() {
				isInScroll = false;
				$('.fixed-menu__item').eq(sectionEq).addClass('active')
				.siblings().removeClass('active');	
			}, 800); 
		};


	var defineSections = function(sections) {
		var activeSection = sections.filter('.active');
		return {
			activeSection: activeSection,
			nextSection: activeSection.next(),
			prevSection: activeSection.prev()
		}
	}


	var scrollToSection = function(direction){
		var section = defineSections(sections);

		if (direction == 'up' && section.nextSection.length)  { // скроллим вверх
			performTransition(section.nextSection.index());
		}
		if (direction == 'down' && section.prevSection.length)  { // скроллим вниз
			performTransition(section.prevSection.index());
		}
	}

	$('.wrapper-main').on({
		wheel: function(e) {
			var deltaY = e.originalEvent.deltaY;
			var direction = deltaY > 0
			? 'up'
			: 'down';
			scrollToSection(direction)
		},
		touchmove: function(e){
			e.preventDefault();
		}
	});


	$(document).on('keydown', function(e){
		var section = defineSections(sections);

		switch (e.keyCode) {
      case 40: //вверх
      if (section.nextSection.length) {
      	performTransition(section.nextSection.index());
      }
      break;
      case 38: //вниз
      if (section.prevSection.length) {
      	performTransition(section.prevSection.index());
      }
      break;
    }
  });


	$('[data-scroll-to]').on('click touchstart', function(e){
		e.preventDefault();

		var elem = $(e.target),
		sectionNum = parseInt(elem.attr('data-scroll-to'));
		performTransition(sectionNum);
	});


	if (isMobile) {
		$(window).swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				scrollToSection(direction);
			}
		});
	}

});