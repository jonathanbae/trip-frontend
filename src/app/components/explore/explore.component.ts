import { TripService } from './../../services/trip.service';
import { ITrip } from './../../models/trip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  trips: ITrip[] = [];
  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService
      .getTrips()
      .subscribe((trips) => (this.trips = trips.slice(1, 5)));
  }
}
