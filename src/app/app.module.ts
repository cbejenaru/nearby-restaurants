import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PlacesComponent } from './places/places.component';
import { ApiService } from './service/api.service';
import { PlacesService } from './service/places.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PlacesComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDb21uXC-hgApdwzkO158N3xbO9KuFbhZo'
    }),
    HttpClientModule

  ],
  providers: [ApiService, PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
