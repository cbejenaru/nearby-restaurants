import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { IPlace } from '../models/place.model';
import { map } from 'rxjs/operators';
import { initCoords } from '../configs';

@Injectable()
export class PlacesService {
  public places: BehaviorSubject<IPlace[]>;
  private latlng: BehaviorSubject<any>;
  private geolocation: BehaviorSubject<any>;

  constructor(private api: ApiService) {
    this.places = new BehaviorSubject([]);
    this.geolocation = new BehaviorSubject({ ...initCoords });
    this.latlng = new BehaviorSubject({ ...initCoords });
    this.setLocation(initCoords.lat, initCoords.lng);
  }

  private setLocation(lat: number, lng: number) {
    this.api
      .getPlaces(lat, lng)
      .pipe(
        map((data: any) => {
          console.log(data);
          const places = data.response.groups[0].items;
          let image = '';
          return places.map((item: any) => {
            const place = item.venue;
            if (place.featuredPhotos && place.featuredPhotos.count > 0) {
              image =
                place.featuredPhotos.items[0].prefix +
                '250x250' +
                place.featuredPhotos.items[0].suffix;
            } else {
              image = 'assets/img/no-image.png';
            }
            return {
              name: place.name || '',
              photoUrl: image,
              lat: place.location.lat || '',
              lng: place.location.lng || '',
              distance: place.location.distance || '',
              isOpen: place.hours ? place.hours.isOpen.toString() : 'unknown',
              webPage: place.url || ''
            };
          });
        })
      )
      .subscribe((places: IPlace[]) => this.places.next(places));
  }

  public getPlaces() {
    return this.places.asObservable();
  }

  public goToGeolocation() {
    this.geolocation
      .subscribe((location: any) => this.setLatLng(location.lat, location.lng))
      .unsubscribe();
  }

  public setGeolocation(lat: number, lng: number) {
    this.geolocation.next({ lat, lng });
  }

  public setLatLng(lat: number, lng: number) {
    this.latlng.next({ lat, lng });
    this.setLocation(lat, lng);
  }

  public getLatLng() {
    return this.latlng.asObservable();
  }
}
