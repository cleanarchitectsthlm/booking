import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../models/reservation-model';
import { ReservationsService } from '../Services/reservations.service';
import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';
import { BookingResevations } from '../models/Dtos/booking-reservationsDto';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  private sub: any;
  private reservationResources: Subject<BookingResevations> = new Subject();
  reservations: Observable<BookingResevations> | null = null;
  reservationList: BookingResevations;
  public seasonDates: string[];

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

    var startDate = new Date('2023/06/01');
    var endDate = new Date('2023/09/30');
    var getDateArray = function(start: any, end: any) {
      var arr = new Array();
      var dt = new Date(start);
      while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
      }
      return arr;
    }

    this.seasonDates = getDateArray(startDate, endDate);
    console.log(this.seasonDates.toLocaleString())
  }
}
