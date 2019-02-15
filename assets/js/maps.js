var map;
var infowindow;
var markers = [];
var autocomplete;
var countryRestrict = {'country': 'uk'};
var countries = {
    
        'be': {
          center: {lat: 50.5, lng: 4.5},
          zoom: 4
        },
        'hr': {
          center: {lat: 45.1, lng: 15.2},
          zoom: 3
        },
        'fr': {
          center: {lat: 46.2, lng: 2.2},
          zoom: 3
        },
        'de': {
          center: {lat: 51.2, lng: 10.4},
          zoom: 5
        },
        'it': {
          center: {lat: 41.8, lng: 12.5},
          zoom: 5
        },
        'pl': {
          center: {lat: 51.9, lng: 19.1},
          zoom: 4
        },
        'pt': {
          center: {lat: 39.3, lng: 8.2},
          zoom: 5
        },
        'es': {
          center: {lat: 40.4, lng: 3.7},
          zoom: 5
        },
        'ro': {
          center: {lat: 45.9, lng: 24.9},
          zoom: 5
        },
        'uk': {
          center: {lat: 55.3, lng: 3.4},
          zoom: 5
        }
      };

function initAutocomplete() {
    var mapCenter = new google.maps.LatLng(51.508710, -0.075799);
    map = new google.maps.Map(document.getElementById('googleMap'), {
          zoom: countries['uk'].zoom,
          center: countries['uk'].center,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false
        });
}

var globalInfoWindow

function openInfoWindow(map, marker, title) {

    if (globalInfoWindow) { globalInfoWindow.close() }

    globalInfoWindow = new google.maps.InfoWindow({
        content: title
    });

    globalInfoWindow.open(map, marker);

}