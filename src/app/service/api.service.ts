import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { venues } from '../configs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public getPlaces(lat: number, lng: number) {
    return this.http.get(
      `${venues}?ll=${lat},${lng}&section=food&venuePhotos=1&oauth_token=NKRP0KY5ZDZIBMCU3TZS4BMP4ZMIQZBQPLBTCPXSIGPWFJ1L&v=20160629`
    );
  }
}
