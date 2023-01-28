import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { ApartmentModel } from '../models/apartment-model';
import { ApartmentService } from '../Services/apartment.service';

@Injectable()
export class ApartmentResolver implements Resolve<ApartmentModel> {
  constructor(private apartmentService: ApartmentService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ApartmentModel> {
    let id: number;
    id = route.params['id'];
    return this.apartmentService.getApartment(id);
  }
}
