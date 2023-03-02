import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../models/reservation-model';
import { ReservationsService } from '../Services/reservations.service';
import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  private sub: any;
  private reservationResources: Subject<Reservation[]> = new Subject();
  reservations: Observable<Reservation[]> | null = null;
  reservationList: Reservation[];
  public days: string[];

  constructor( private route: ActivatedRoute, private reservationsService: ReservationsService) { }
  ngOnInit(): void {
    this.reservationsService.GetBookingReservations().subscribe(res => {
      this.reservationResources.next(res);
    });

    this.reservations = this.reservationResources;
    this.reservations.subscribe(reservation => {
      this.reservationList = reservation;
      console.log(this.reservationList)
    });

    const getDaysByMonth = (month: any) => {
      const daysInJune = moment(month).daysInMonth();
      const arrayOfDays = Array.from({ length: daysInJune }, (v, k) => k + 1)
      return arrayOfDays
    };

    const daysInJune = `${getDaysByMonth('2023-06')}`;
    const daysInJuly = `${getDaysByMonth('2023-07')}`;
    this.days = [daysInJune, daysInJuly];
    console.log(this.days)
    // let month = '2023-06';
    // console.log(`June => ${getDaysByMonth('2023-06')}`);

    // month = '2023-07';
    // console.log(`July => ${getDaysByMonth(month)}`);

    // month = '2023-08';
    // console.log(`August => ${getDaysByMonth(month)}`);

    // month = '2023-09';
    // console.log(`September => ${getDaysByMonth(month)}`);
  }
}
