import { Component, OnInit } from '@angular/core';

import { IPlace } from '../models/place.model';
import { PlacesService } from '../service/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  public places: IPlace[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.placesService
      .getPlaces()
      .subscribe(data => {
        this.places = data;
      });
  }
}
