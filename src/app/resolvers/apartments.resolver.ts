import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { Observable} from 'rxjs';
import { ApartmentService } from '../Services/apartment.service';
import { ApartmentModel } from '../models/apartment-model';

@Injectable()
export class ApartmentsResolver implements Resolve<any> {
  constructor(private apartmentService: ApartmentService){}
  resolve(): Observable<ApartmentModel[]> {
    return this.apartmentService.getApartments();
  }
}
