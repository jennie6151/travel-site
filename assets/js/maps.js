var map;
var infowindow;
var markers = [];
var autocomplete;
var countryRestrict = { 'country': 'uk' };
var countries = {

    'be': {
        center: { lat: 50.5, lng: 4.5 },
        zoom: 4
    },
    'hr': {
        center: { lat: 45.1, lng: 15.2 },
        zoom: 3
    },
    'fr': {
        center: { lat: 46.2, lng: 2.2 },
        zoom: 3
    },
    'de': {
        center: { lat: 51.2, lng: 10.4 },
        zoom: 5
    },
    'it': {
        center: { lat: 41.8, lng: 12.5 },
        zoom: 5
    },
    'pl': {
        center: { lat: 51.9, lng: 19.1 },
        zoom: 4
    },
    'pt': {
        center: { lat: 39.3, lng: 8.2 },
        zoom: 5
    },
    'es': {
        center: { lat: 40.4, lng: 3.7 },
        zoom: 5
    },
    'ro': {
        center: { lat: 45.9, lng: 24.9 },
        zoom: 5
    },
    'uk': {
        center: { lat: 55.3, lng: 3.4 },
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

    autocomplete = new google.maps.places.Autocomplete(
        (
            document.getElementById('autocomplete')), {
            types: ['(cities)'],
            componentRestrictions: countryRestrict
        });
    places = new google.maps.places.PlacesService(map);

    autocomplete.addListener('place_changed', onPlaceChanged);

    document.getElementById('country').addEventListener(
        'change', setAutocompleteCountry);

    $('input[type=radio][name=type]').on('change', function() {
        search();
    });

    $("#autocomplete").on("focus", function() {
        this.placeholder = '';
        this.value = '';
    });

}

function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (place.geometry) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
        search();
    }
    else {
        document.getElementById('autocomplete').placeholder = 'Where will you wander?';
    }
}

function search() {
    var search = {
        bounds: map.getBounds(),
        types: []
    };

    var searchType = [];
    $.each($("input[name='type']:checked"), function() {
        searchType.push($(this).val());

    });


    $.each(searchType, function() {

        if (this == 'accommodation') {
            search.types.push('lodging')
        }

        if (this == 'restaurants') {
            search.types.push('restaurant')
        }

        if (this == 'attractions') {
            search.types.push('park')
        }

        if (this == 'travel') {
            search.types.push('transit_station')
        }
    });

    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            for (var i = 0; i < results.length; i++) {

                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP
                });

                markers[i].placeResult = results[i];

                markers[i].addListener('click', showInfoWindow);

                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }

        if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
            clearResults();
            clearMarkers();

            var resultDisplayList = document.getElementById('searchResults');
            var resultsTextContainer = document.createElement('li');

            resultsTextContainer.appendChild(document.createTextNode('No results have been found. Please search again'));
            resultDisplayList.appendChild(resultsTextContainer);
        }
    });
}

function showInfoWindow() {
    var marker = this;
    places.getDetails({ placeId: marker.placeResult.place_id },
        function(place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            if (globalInfoWindow) { globalInfoWindow.close() }
            globalInfoWindow = new google.maps.InfoWindow({
                content: place.name + ' <br>' + place.vicinity
            });
            globalInfoWindow.open(map, marker);

        });
}

function addResult(result, i) {
    var resultDisplayList = document.getElementById('searchResults');
    var resultsTextContainer = document.createElement('li');
    var icon = document.createElement("i");

    icon.className = "fas fa-arrow-right";
resultsTextContainer.appendChild(icon);
    resultsTextContainer.appendChild(document.createTextNode(' ' + result.name + '. ' + 'Rating of ' + (result.rating ? result.rating : ' NA')));
    resultDisplayList.appendChild(resultsTextContainer);
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

function clearResults() {
    var resultDisplayList = document.getElementById('searchResults');
    while (resultDisplayList.childNodes[0]) {
        resultDisplayList.removeChild(resultDisplayList.childNodes[0]);
    }
}

function dropMarker(i) {
    return function() {
        markers[i].setMap(map);
    };
}

var globalInfoWindow

function openInfoWindow(map, marker, title) {

    if (globalInfoWindow) { globalInfoWindow.close() }

    globalInfoWindow = new google.maps.InfoWindow({
        content: title
    });

    globalInfoWindow.open(map, marker);

}

function setAutocompleteCountry() {
    var country = document.getElementById('country').value;
    if (country == 'all') {
        autocomplete.setComponentRestrictions({ 'country': [] });
        map.setCenter({ lat: 15, lng: 0 });
        map.setZoom(2);
    }
    else {
        autocomplete.setComponentRestrictions({ 'country': country });
        map.setCenter(countries[country].center);
        map.setZoom(countries[country].zoom);
    }
    $('#autocomplete').val('')
    clearResults();
    clearMarkers();
}
