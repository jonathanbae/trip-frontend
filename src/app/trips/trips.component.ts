import { ITrip } from './../trip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  trip: ITrip = {
    id: 1,
    name: 'Paint Mines',
  };

  constructor() {}

  ngOnInit(): void {}
}
