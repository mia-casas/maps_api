if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      rotateControl: true,
      streetViewControl: true,
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var marker = new google.maps.Marker({
    position: latlng,
    map: map
});
let contentString = '<div id="content"><h2 id="firstHeading" class="firstHeading">Custom info window</h2><p>This is a cool custom info window.</p></div>';
let infowindow = new google.maps.InfoWindow({
    content: contentString
});
 marker.addListener('click', function() {
    infowindow.open(map, marker);
});
    });
} else {
    var para = document.createElement('p');
    para.textContent = 'Argh, no geolocation!';
    document.body.appendChild(para);
}