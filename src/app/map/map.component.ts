import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../service/places.service';
import { initCoords, GEOLOCATION_ERRORS } from '../configs/app.config';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat: number;
  public lng: number;

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.setPlace(initCoords.lat, initCoords.lng);
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.placesService.setLocation(this.lat, this.lng);
        },
        error => {
          this.placesService.setLocation(initCoords.lat, initCoords.lng);
          switch (error.code) {
            case 1:
              console.error(
                GEOLOCATION_ERRORS['errors.location.permissionDenied']
              );
              break;
            case 2:
              console.error(
                GEOLOCATION_ERRORS['errors.location.positionUnavailable']
              );
              break;
            case 3:
              console.error(GEOLOCATION_ERRORS['errors.location.timeout']);
              break;
          }
        }
      );
    }
  }

  public onDragEnd(data) {
    this.placesService.setLocation(data.coords.lat, data.coords.lng);
  }
  public setPlace(lat: number, lng: number) {
    this.placesService.setLocation(lat, lng);
    this.lat = lat;
    this.lng = lng;
  }
}
