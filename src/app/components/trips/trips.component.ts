import { TripService } from './../../services/trip.service';
import { ITrip } from './../../models/trip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  trips: ITrip[];
  selectedTrip: ITrip;

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.getTrips();
  }

  onSelect(trip: ITrip): void {
    this.selectedTrip = trip;
  }

  getTrips(): void {
    this.trips = this.tripService.getTrips();
  }
}
