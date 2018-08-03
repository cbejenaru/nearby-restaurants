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
    this.placesService.getPlaces().subscribe(data => {
      this.places = data;
    });
  }

  public getOpenStatus(isOpen: any) {
    if (isOpen === 'unknown') {
      return { class: 'bg-secondary', state: 'Unknown' };
    }
    return isOpen === 'true'
      ? { class: 'bg-success', state: 'Open' }
      : { class: 'bg-danger', state: 'Close' };
  }
}
