window.initMap = function() {
	var icons = '../img/icons/map-marker.svg';

	if ($(window).width() <= 320) {
		var map = new google.maps.Map(document.getElementById('map'), 
	{
		center: {lat: 59.9276608, lng: 30.3108849},
		zoom: 11,
		disableDefaultUI: true
	});
	} else {
		var map = new google.maps.Map(document.getElementById('map'), 
	{
		center: {lat: 59.9276608, lng: 30.3108849},
		zoom: 12,
		disableDefaultUI: true
	});
	};

	map.setOptions({draggable: true, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: false});

	var markers = 
	[
	{title: 'ул. ШейхЗаид, стр.1', location: {lat: 59.9276608, lng: 30.3108849}},
	{title: 'ул. ШейхЗаид, стр.2', location: {lat: 59.927638, lng: 30.360182}},
	{title: 'ул. ШейхЗаид, стр.3', location: {lat: 59.941890, lng: 30.275987}},
	{title: 'ул. ШейхЗаид, стр.4', location: {lat: 59.965393, lng:  30.312774}}
	]

	markers.forEach(function(feature) {
		var marker = new google.maps.Marker(
		{
			position: feature.location,
			title: feature.title,
			icon: icons,
			map: map
		});
	});
}
