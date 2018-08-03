import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPlace } from '../../models/place.model';

@Component({
  selector: 'app-place-dialog',
  templateUrl: './place-dialog.component.html',
  styleUrls: ['./place-dialog.component.css']
})
export class PlaceDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public place: IPlace,
    private dialogRef: MatDialogRef<PlaceDialogComponent>
  ) {
    console.log(place);
  }

  ngOnInit() {}

  public getOpenStatus(isOpen: any) {
    if (isOpen === 'unknown') {
      return { class: 'bg-secondary', state: 'Unknown' };
    }
    return isOpen === 'true'
      ? { class: 'bg-success', state: 'Open' }
      : { class: 'bg-danger', state: 'Close' };
  }

  public close() {
    this.dialogRef.close();
  }
}
