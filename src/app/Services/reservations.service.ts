import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation-model';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs';
import { BookingResevations } from '../models/Dtos/booking-reservationsDto';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private httpService: HttpClient, private configuration: ConfigurationService ) { }
  public GetBookingReservations(): Observable<BookingResevations> {
    return this.httpService
      .get<BookingResevations>(this.configuration.baseApiFnUrl + 'reservations');
  }
}
