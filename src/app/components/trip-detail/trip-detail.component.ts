import { ITrip } from './../../models/trip';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss'],
})
export class TripDetailComponent implements OnInit {
  @Input() trip: ITrip;
  constructor() {}

  ngOnInit(): void {}
}
