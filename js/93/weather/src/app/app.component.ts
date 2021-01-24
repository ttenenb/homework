import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/shared/Weather';
import { WeatherService } from 'src/shared/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private weatherService: WeatherService) { }
  weather: Observable<Weather>;

  getWeather(zip: string) {
    if (zip.length === 5) {
      this.weather = this.weatherService?.getWeather(zip);
    }
  }

}
