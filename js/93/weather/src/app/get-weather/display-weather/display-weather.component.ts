import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent {
  @Input()
  display: any;
}
