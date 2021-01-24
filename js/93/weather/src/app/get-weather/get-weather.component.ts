import { Observable } from 'rxjs';
import { Weather } from 'src/shared/Weather';
import { WeatherService } from 'src/shared/weather.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-get-weather',
  templateUrl: './get-weather.component.html',
  styleUrls: ['./get-weather.component.css']
})
export class GetWeatherComponent implements OnInit {
  weather: Observable<Weather>;
  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.weather = this.route.paramMap.pipe(
      switchMap((params) => {
        return  this.weatherService?.getWeather(params.get('zip'));
      }))
  }

}
