import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from '../../models/place.model';
import { PlaceDialogComponent } from '../place-dialog/place-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  @Input() places: IPlace[];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public getOpenStatus(isOpen: any) {
    if (isOpen === 'unknown') {
      return { class: 'bg-secondary', state: 'Unknown' };
    }
    return isOpen === 'true'
      ? { class: 'bg-success', state: 'Open' }
      : { class: 'bg-danger', state: 'Close' };
  }

  public viewDetails(place: IPlace) {
    this.dialog.open(PlaceDialogComponent, {
      width: '550px',
      data: { ...place }
    });
  }
}
