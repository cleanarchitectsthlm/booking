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
  reservationList: BookingResevations | null | any;
  public seasonDates: string[];

  constructor( private route: ActivatedRoute, private reservationsService: ReservationsService) { }
  ngOnInit(): void {
    this.reservationsService.GetBookingReservations().subscribe(res => {
      this.reservationResources.next(res);
    });

    this.reservations = this.reservationResources;
    this.reservations.subscribe(reservation => {
      this.reservationList = reservation;
      // console.log(this.reservationList)
    });

    var startDate = new Date('2021/06/01');
    var endDate = new Date('2021/09/30');
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
    // console.log(this.seasonDates.toLocaleString())

  }

  getApartmentName(apartmentId: number) {
    if (apartmentId == 2) { return "M1" }
    else if (apartmentId == 3) { return "M2" }
    else if (apartmentId == 4) { return "M3" }
    else { return "M4" }
  }

  checkIfDateIsOccupied(date: any, apartmentReservations: Reservation[]) {
    // debugger;
    const currentDate = new Date(date).getTime();
    // console.log(currentDate.toLocaleDateString())
    return !!apartmentReservations.find(item => new Date(item.occupiedDate).getTime() === currentDate);
  }
  checkIfCheckoutDateIsTrue(date: any, apartmentReservations: Reservation[]) {
    // debugger;
    const currentDate = new Date(date).getTime();
    // console.log(currentDate.toLocaleDateString())
    return !!apartmentReservations.find(item => new Date(item.occupiedDate).getTime() === currentDate && item.isCheckoutDate === true);
  }
}
