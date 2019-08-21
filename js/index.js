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
// VANILA JS OPACITY NAVBAR ON SCROL
window.addEventListener('scroll', function() {
  if (window.scrollY > 100 ) {
    this.document.querySelector('#navbar').style.opacity = 0.9;    
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;    
  }
});


// JQUERY SMOOTH SCROLLING
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 54
      }, 800
    );
  }
})


