import { Component, OnInit } from '@angular/core';

import { IPlace } from '../models/place.model';
import { PlacesService } from '../service/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  public allPlaces: IPlace[];
  public places: IPlace[];
  public openOnly = false;
  public sortMode = 'asc';
  public viewMode = 'grid4';

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.placesService.getPlaces().subscribe(data => {
      this.allPlaces = data;
      this.sortPlaces(this.sortMode);
    });

  }

  public openOnlyToggle() {
    this.openOnly = !this.openOnly;
    this.sortPlaces(this.sortMode);
  }

  public toggleFilter() {
    if (this.sortMode === 'asc') {
      this.sortPlaces('desc');
      this.sortMode = 'desc';
    } else {
      this.sortPlaces('asc');
      this.sortMode = 'asc';
    }
  }

  public goToLocation() {
    this.placesService.goToGeolocation();
  }

  private sortPlaces(mode) {
    this.places = this.allPlaces
      .slice()
      .filter((p: IPlace) => {
        if (this.openOnly) {
          return p.isOpen === 'true';
        } else {
          return true;
        }
      })
      .sort(mode === 'asc' ? this.sortAsc : this.sortDesc);
  }
  private sortAsc = (a: IPlace, b: IPlace) => {
    return a.distance - b.distance;
  }
  private sortDesc = (a: IPlace, b: IPlace) => {
    return b.distance - a.distance;
  }
}
