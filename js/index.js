console.log('connected...');



function initMap() {
  // your location 
  const local = { lat: 42.361145, lng: -71.057083 };

  // center map on location
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: local
  });

  // the marker position
  const marker = new google.maps.Marker({ position: local,
  map: map });
}

console.log(map);
