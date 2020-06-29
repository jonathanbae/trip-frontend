import { TRIPS } from './../../../assets/staticdata/mock-trips';
import { ITrip } from './../../models/trip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  trips = TRIPS;
  selectedTrip: ITrip;

  constructor() {}

  ngOnInit(): void {}

  onSelect(trip: ITrip): void {
    this.selectedTrip = trip;
  }
}
