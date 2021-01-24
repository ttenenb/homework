import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetWeatherComponent } from './get-weather/get-weather.component';
import { FormsModule } from '@angular/forms';
import { DisplayWeatherComponent } from './get-weather/display-weather/display-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetWeatherComponent,
    DisplayWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
