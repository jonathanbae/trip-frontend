import { TripService } from '@services/trip.service';
import { ITrip } from '@models/trip';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss'],
})
export class TripDetailComponent implements OnInit {
  @Input() trip: ITrip;
  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTrip();
  }

  getTrip(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripService.getTrip(id).subscribe((trip) => (this.trip = trip));
  }

  goBack(): void {
    this.location.back();
  }
}
