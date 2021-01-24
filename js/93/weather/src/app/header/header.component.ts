import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'PCS Weather';
  constructor(private router: Router) { }

  goToWeather(zip: any) {
    if (zip.length === 5) {
      this.router.navigate(['weather', zip]);
    }
  }
}
