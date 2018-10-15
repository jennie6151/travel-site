var map;
        var infowindow;

        function createMap() {
            var mapCenter = new google.maps.LatLng(51.508710, -0.075799);

            map = new google.maps.Map(document.getElementById('googleMap'), {
                zoom: 15,
                center: mapCenter,

            });

            infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location: mapCenter,
                type: ['airport, amusement_park, aquarium, art_gallery, bar, bowling_alley, bus_station, cafe, campground, car_rental, casino, cemetery, church, city_hall, courthouse, embassy, hindu_temple, library, mosque, movie_theater, museum, night_club, park, restaurant, rv_park, shopping_mall, spa, stadium, subway_station, synagogue, taxi_stand, train_station, transit_station, zoo'],
                radius: '1000'
            }, processSearchResults);
        }

        function processSearchResults(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                icon: "/assets/images/map-pin-blue.png"
            });


            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });


        }