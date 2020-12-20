import React, { Component } from 'react';
import './App.css';
import WeatherDetails from './WeatherDetails';
const units = 'imperial';
const myKey = '8193803940fed0537cea76663ab95703';

export default class App extends Component {
  state = {
    weather: null,
    places: []

  }



  getTheWeatherFunction(e) {
    const zip = e.target.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${myKey}&zip=${zip}&units=${units}`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(weather => {
        this.setState({
          weather: weather,
          places: this.state.places.concat([{name:weather.name,temperature:weather.main.temp}])
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <>
        <div className="App">
          <form style={{textAlign: "center"}}>
            <input style={
              {
                width: "230px",
                position: "absolute",
                top: "0px"
              }
            }
              placeholder="Enter the zip for the requested location"
              onBlur={this.getTheWeatherFunction.bind(this)}></input>
          </form>
          <WeatherDetails weather={this.state.weather} places={this.state.places} />
        </div>
      </>
    );
  }
}

