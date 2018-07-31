import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { IPlace } from '../models/place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  public places: IPlace[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        // tslint:disable-next-line:max-line-length
        'https://api.foursquare.com/v2/venues/explore?ll=47.016756,28.836708&section=food&venuePhotos=1&oauth_token=NKRP0KY5ZDZIBMCU3TZS4BMP4ZMIQZBQPLBTCPXSIGPWFJ1L&v=20160629'
      )
      .pipe(
        map((data: any) => {
          console.log(data);
          const places = data.response.groups[0].items;
          let image = '';
          return places.map((item: any) => {
            const place = item.venue;
            if (place.featuredPhotos.count > 0) {
              image =
                place.featuredPhotos.items[0].prefix +
                place.featuredPhotos.items[0].user.id +
                place.featuredPhotos.items[0].suffix;
            }

            return {
              name: place.name,
              photoUrl: image,
              lat: place.location.lat,
              lng: place.location.lng,
              distance: place.location.distance,
              isOpen: place.hours.isOpen,
              webPage: place.url || ''
            };
          });
        })
      )
      .subscribe(data => {
        this.places = data;
      });
  }
}
