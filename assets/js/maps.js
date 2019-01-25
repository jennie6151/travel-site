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

    searchBox = new google.maps.places.SearchBox(input,{   type: ['store']});

       map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', getPlaces);
}

  var filterResults = [];
  $(document).ready(function(){
    $('#touristAttractionsButton').click(function() {
         filterResults = [];
        if($('#touristAttractions').is(":checked")){
            filterResults.push('amusement_park', 'aquarium', 'art_gallery', 'bowling_alley', 'casino', 'cemetery', 'church', 'city_hall', 'courthouse', 'embassy', 'hindu_temple', 'library', 'mosque', 'movie_theater', 'museum', 'night_club', 'park', 'shopping_mall', 'spa', 'stadium', 'synagogue', 'zoo');
        alert('You want to find tourist attractions.');}
        
        if($('#accommodation').is(":checked")){
            filterResults.push('campground', 'lodging', 'rv_park');
        alert('You want to find accommodation.');}
        
        if($('#barsRestaurants').is(":checked")){
            filterResults.push('bar', 'cafe', 'meal_takeaway', 'restaurant');
        alert('You want to find bars and restaurants.');}
        
        if($('#travel').is(":checked")){
            filterResults.push('airport', 'bus_station', 'car_rental', 'gas_station', 'parking', 'subway_station', 'taxi_stand', 'train_station');
        alert('You want to find travel options.');}
    });
});

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
        resultLink.setAttribute('class', 'list-group-item list-group-item-info');
        resultLink.setAttribute('href', '#');
        resultsList.appendChild(resultLink);

        resultLink.onclick = function() {

            openInfoWindow(map, marker, place.name + '<br/> ' + place.formatted_address)
            window.scrollTo(0, 400);
            return false;
        }

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

function openInfoWindow(map, marker, title) {

    if (globalInfoWindow) { globalInfoWindow.close() }

    globalInfoWindow = new google.maps.InfoWindow({
        content: title
    });

    globalInfoWindow.open(map, marker);

}