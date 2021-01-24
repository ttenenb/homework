import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GetWeatherComponent } from './get-weather/get-weather.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'weather/:zip',
    component: GetWeatherComponent
  },

  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
