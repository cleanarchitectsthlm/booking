import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../models/reservation-model';
import { ReservationsService } from '../Services/reservations.service';
import { Observable, Subject } from 'rxjs';

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
  }
}
