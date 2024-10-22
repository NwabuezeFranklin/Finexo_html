// to get current year
function getYear() {
  var currentDate = new Date()
  var currentYear = currentDate.getFullYear()
  document.querySelector('#displayYear').innerHTML = currentYear
}

getYear()

// Client section owl carousel
$('.client_owl-carousel').owlCarousel({
  loop: true, // Allows infinite looping
  margin: 20, // Space between items
  dots: false, // Disable navigation dots
  nav: true, // Enable next/prev buttons
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  autoplay: true, // Enable auto-sliding
  autoplayHoverPause: true, // Pause on hover
  autoplayTimeout: 7000, // 5 seconds per slide (adjust as needed)
  smartSpeed: 1000, // Speed of the transition between slides (in milliseconds)
  responsive: {
    0: {
      items: 1, // Display one item for smaller screens
    },
    600: {
      items: 1, // Display one item for medium screens
    },
    1000: {
      items: 1, // Display one item for larger screens
    },
  },
})

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  }
  var map = new google.maps.Map(document.getElementById('googleMap'), mapProp)
}
