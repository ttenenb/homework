import React, { Component } from 'react';
export default class WeatherDetails extends Component {

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    clickHandler() {
        console.log('Weather');
    }

    render(props) {
        if (this.props.weather ) {
            const { name, main, weather, wind, sys } = this.props.weather;
            const image = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
            let sunrise = new Date(sys.sunrise * 1000);
            let sunset = new Date(sys.sunset * 1000);

            return (
                <>
                    <div id="sidebar">
                        <ul>
                            {/* <li>{ name} {Math.round(main.temp)} degrees</li>  */}
                            {this.props.places.map(n => {
                                return <li onClick={this.clickHandler}>{n.name} {n.temperature}  </li>  
                            })}
                        </ul>
                    </div>
                    <div id="weather">
                        <h1>The weather for {name}</h1>
                        <img src={image} alt={name}></img>
                        <h3>{this.capitalizeFirstLetter(weather[0].description)}</h3>
                        <h2> The temperature is {Math.round(main.temp)} degrees</h2>
                        <h3>The wind is at {Math.round(wind.speed)} Mph</h3>
                        <h4>Sunrise is at {sunrise.toLocaleTimeString()}</h4>
                        <h4>Sunset is at {sunset.toLocaleTimeString()}</h4>
                    </div>
                </>
            );
        }
        else {
            return null
        }
    }
}
