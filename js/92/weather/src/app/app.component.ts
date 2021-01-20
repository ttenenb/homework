import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherDetails, WeatherDetailsServer } from 'src/shared/WeatherDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherDetails: WeatherDetails;

  constructor(private httpClient: HttpClient) { }

  getWeather(zip) {
    if (zip.length === 5) {

      this.httpClient.get<WeatherDetailsServer>(`http://api.openweathermap.org/data/2.5/weather?appid=8193803940fed0537cea76663ab95703&zip=${zip}&units=imperial`)
        .subscribe(weatherDetails => {
          this.weatherDetails = {
            name: weatherDetails.name,
            weather: [
              {
                description: weatherDetails.weather[0].description,
                icon: weatherDetails.weather[0].icon
              }
            ],
            main: {
              temp: Math.round(weatherDetails.main.temp)
            }


          }
        })
      }
  }

  title = 'PCS Weather';
}
