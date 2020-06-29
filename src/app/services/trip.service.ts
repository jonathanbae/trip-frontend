import { TRIPS } from './../../assets/staticdata/mock-trips';
import { ITrip } from './../models/trip';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor() {}

  getTrips(): ITrip[] {
    return TRIPS;
  }
}
