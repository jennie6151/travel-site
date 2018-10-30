var map;
var infowindow;
var searchBox;
var markers = [];

function initAutocomplete() {
    var mapCenter = new google.maps.LatLng(51.508710, -0.075799);
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 3,
        center: mapCenter,
    });

    var input = document.getElementById('mapSearchInput');
    searchBox = new google.maps.places.SearchBox(input);


    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', getPlaces);
}


function getPlaces() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
        return;
    }

    markers.forEach(function(marker) {
        marker.setMap(null);
    });

    markers = [];

    var resultsList = document.getElementById('searchResults');
    resultsList.innerHTML = '';

    var bounds = new google.maps.LatLngBounds();


    places.forEach(function(place) {

        if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
        }
        var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        var marker = new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
        });

     
        marker.addListener('click', function() {
          
            openInfoWindow(map, marker, place.name + '<br/> ' + place.formatted_address)
        });
        
        markers.push(marker);


        var resultLink = document.createElement('a');
        resultLink.appendChild(document.createTextNode(place.name + ' ' + place.formatted_address));
        resultLink.setAttribute('class', 'list-group-item');
        resultLink.setAttribute('href', '#');
        resultsList.appendChild(resultLink);


        if (place.geometry.viewport) {

            bounds.union(place.geometry.viewport);
        }
        else {
            bounds.extend(place.geometry.location);
        }
    });
    map.fitBounds(bounds);
}

var globalInfoWindow
function openInfoWindow(map, marker, title){
    
    if(globalInfoWindow){globalInfoWindow.close()}
    
      globalInfoWindow = new google.maps.InfoWindow({
            content: title
        });
        
          globalInfoWindow.open(map, marker);
        
}