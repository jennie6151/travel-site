var map;
var infowindow;

function initAutocomplete() {
    var mapCenter = new google.maps.LatLng(51.508710, -0.075799);
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 15,
        center: mapCenter,
    });
    
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

 
  }