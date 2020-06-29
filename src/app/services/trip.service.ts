import { TRIPS } from './../../assets/staticdata/mock-trips';
import { ITrip } from './../models/trip';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor() {}

  getTrips(): Observable<ITrip[]> {
    return of(TRIPS);
  }
}
