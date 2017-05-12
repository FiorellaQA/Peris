navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  console.log(position.coords);
  initMap(position.coords);
}
function initMap(coords) {
  var uluru = {lat: coords.latitude, lng: coords.longitude};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}