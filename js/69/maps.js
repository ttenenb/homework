let map;

/* global google */
/* jshint -W098 */

function initMap() {
    'use strict';


    const buttonToFindLoc = $('#findLocation');
    const units = 'imperial';
    const myKey = '';
    const infoWindow = new google.maps.InfoWindow();

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        const crd = pos.coords;

        const currentLocation = { lat: crd.latitude, lng: crd.longitude };

        const map = new google.maps.Map(document.getElementById("map"), {
            center: currentLocation,
            zoom: 12,
        });

        const currentLocationMarker = new google.maps.Marker({
            position: currentLocation,
            map: map
        });

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${myKey}&units=${units}`)
            .then(r => r.json())
            .then(weatherData => {
                callingGeoNamesApi(weatherData.name, map, currentLocationMarker);

                buttonToFindLoc.click(() => {
                    let find = $('#searchInput').val();
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${find}&appid=${myKey}&units=${units}`)
                        .then(r => r.json())
                        .then(weatherData2 => {
                            console.log(weatherData2.coord);

                            const requestedLoc = { lat: weatherData2.coord.lat, lng: weatherData2.coord.lon };

                            const newMap = new google.maps.Map(document.getElementById("map"), {
                                center: requestedLoc,
                                zoom: 10
                            });

                            const markerForRequestedLoc = new google.maps.Marker({
                                position: requestedLoc,
                                map: newMap,
                                title: weatherData2.name
                            });

                            console.log(weatherData2.name);
                            callingGeoNamesApi(weatherData2.name, newMap, markerForRequestedLoc);

                        })
                        .catch(e => console.error(e));
                        document.getElementById('searchInput').value='';
                });
            })
            .catch(e => console.error(e));
    }


    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function callingGeoNamesApi(variable, map, marker) {
        fetch(`http://api.geonames.org/wikipediaSearch?q=${variable}&maxRows=10&username=tenenbaumt&type=json`)
            .then(r => r.json())
            .then(names => {
                console.log(names);

                marker.addListener('click', () => {
                    for (let index = 0; index < names.geonames.length; index++) {

                        if (names.geonames[index].title.includes(variable)) {
                            infoWindow.setContent(`${names.geonames[index].summary} <a target="_blank" href="https://en.wikipedia.org/wiki/${names.geonames[index].title}">more info</a>`);
                            infoWindow.open(map, marker);
                        }
                    }
                });
            })
            .catch(e => console.error(e));

    }
    navigator.geolocation.getCurrentPosition(success, error, options);
}



