import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation-model';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private httpService: HttpClient, private configuration: ConfigurationService ) { }
  public GetBookingReservations(): Observable<Reservation[]> {
    return this.httpService
      .get<Reservation[]>(this.configuration.baseApiFnUrl + 'reservations');
  }
}
