import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PlacesComponent } from './places/places.component';
import { ApiService } from './service/api.service';
import { PlacesService } from './service/places.service';
import { PlacesListComponent } from './places/places-list/places-list.component';
import { PlacesGridComponent } from './places/places-grid/places-grid.component';
import { PlaceDialogComponent } from './places/place-dialog/place-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PlacesComponent,
    PlacesListComponent,
    PlacesGridComponent,
    PlaceDialogComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDb21uXC-hgApdwzkO158N3xbO9KuFbhZo'
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  entryComponents: [PlaceDialogComponent],
  providers: [ApiService, PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
