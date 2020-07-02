import { MessageService } from './../../services/message.service';
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

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips().subscribe((trips) => (this.trips = trips));
  }
}
