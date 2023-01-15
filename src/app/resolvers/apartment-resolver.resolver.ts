import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { APARTMENTS } from '../data/apartments';

@Injectable(
  {
  providedIn: 'root'
  }
)
export class ApartmentResolverResolver implements Resolve<any> {
  constructor(private http: HttpClient) { }

  public mockApartments: Array<any> = APARTMENTS;

  public getApartment(id: any): any {
    let apartment: any = this.mockApartments.find(apartment => apartment.apartmentId == id);
    return apartment;
  }
  resolve(route: ActivatedRouteSnapshot){
    let id: any = route.params['id'];
    return this.getApartment(id);
  }
}
