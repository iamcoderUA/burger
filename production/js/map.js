window.initMap = function() {
	var icons = '../img/icons/map-marker.svg',
	map = new google.maps.Map(document.getElementById('map'), 
	{
		center: {lat: 59.9276608, lng: 30.3108849},
		zoom: 12,
		disableDefaultUI: true
	});

	map.setOptions({draggable: true, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: false});

	var markers = 
	[
	{title: 'ул. ШейхЗаид, стр.5', location: {lat: 59.9276608, lng: 30.3108849}},
	{title: 'ул. ШейхЗаид, стр.5', location: {lat: 59.9276608, lng: 30.2108849}},
	{title: 'ул. ШейхЗаид, стр.5', location: {lat: 59.9276608, lng: 30.4108849}},
	{title: 'ул. ШейхЗаид, стр.5', location: {lat: 60.9276608, lng: 30.3108849}}
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
