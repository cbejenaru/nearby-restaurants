import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from '../../models/place.model';

@Component({
  selector: 'app-places-grid',
  templateUrl: './places-grid.component.html',
  styleUrls: ['./places-grid.component.css']
})
export class PlacesGridComponent implements OnInit {
  @Input() places: IPlace[];
  @Input() columns: string;
  public columnClass = 'col-lg-3';

  constructor() {}

  ngOnInit() {
    console.log(this.columns, typeof this.columns);
    if (this.columns === '2') {
      this.columnClass = 'col-lg-5';
    } else {
      this.columnClass = `col-lg-${12 / parseInt(this.columns, 10)}`;
    }
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
