(function () {
    'use strict';

    const loc = $('#location');
    const weatherIcon = $('#weatherIcon');
    const temp = $('#temperature');
    const wind = $('#wind');
    const sunIcon = $('#sunIcon');
    const sun = $('#sun');
    const units = 'imperial';

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        const crd = pos.coords;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${myKey}&units=${units}`)
            .then(r => r.json())
            .then(weatherData => {
                loc.text(`The weather in ${weatherData.name}`);
                weatherIcon.attr('src', `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`);
                temp.text(`${Math.round(weatherData.main.temp)} degrees and ${weatherData.weather[0].description}`);
                wind.text(`The wind is at ${weatherData.wind.speed} mph`);
                let sunrise = new Date(weatherData.sys.sunrise * 1000);
                let sunset = new Date(weatherData.sys.sunset * 1000);
                sunIcon.attr('src', 'img/sun.jpg');
                sun.html(`Sunrise - ${sunrise.toLocaleTimeString()}`);
                sun.append('<br/>');
                sun.append(` Sunset - ${ sunset.toLocaleTimeString() }`);
            })
            .catch(e => console.error(e));

    }

    function error(err) {
        console.warn(`ERROR(${ err.code }): ${ err.message }`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);


}());
