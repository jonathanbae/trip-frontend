import { MessageService } from './message.service';
import { TRIPS } from '@assets/staticdata/mock-trips';
import { ITrip } from '@models/trip';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(private messageService: MessageService) {}

  getTrips(): Observable<ITrip[]> {
    this.messageService.add('TripService: fetched trips');
    return of(TRIPS);
  }

  getTrip(id: number): Observable<ITrip> {
    this.messageService.add(`TripService: feetched trip id=${id}`);
    return of(TRIPS.find((trip) => trip.id === id));
  }
}
