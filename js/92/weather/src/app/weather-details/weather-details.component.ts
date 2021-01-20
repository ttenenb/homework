import { Component, Input } from '@angular/core';
import { WeatherDetails } from 'src/shared/WeatherDetails';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  @Input()
  weatherDetails: WeatherDetails;
}
