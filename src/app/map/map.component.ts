import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public lat = 47.0105;
  public lng = 28.8638;

  constructor() { }

  ngOnInit() {
  }

}
