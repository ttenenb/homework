import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WeatherServer } from './Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather(zip: any) {
    return this.httpClient.get<WeatherServer>(`http://api.openweathermap.org/data/2.5/weather?appid=8193803940fed0537cea76663ab95703&zip=${zip}&units=imperial`)
      .pipe(map(weatherService => ({
        name: weatherService.name,
        description : `The temperature is ${Math.round(weatherService.main.temp)} degrees and there are ${weatherService.weather[0].description}`,
        icon : `http://openweathermap.org/img/wn/${weatherService.weather[0].icon}.png`
      })))
  }

}
