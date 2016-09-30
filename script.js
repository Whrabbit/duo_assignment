// JavaScript Document
var map;
function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(52.5498783, 13.425209099999961),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
  new google.maps.Marker({map:map,position:map.getCenter()});
 }
google.maps.event.addDomListener(window, 'load', initialize);
$(window).scroll(function(){
	//THE HEIGHT, PLUS THE MARGIN OR PADDING IT NEEDS TO BE FULLY COVERED
	if($(window).scrollTop()<$('#map_canvas').height() + 21) 
		$('#map_canvas').css({'transform':'translate(0px,'+$(window).scrollTop()+'px)'});
  $('h4').html($(window).scrollTop());
});