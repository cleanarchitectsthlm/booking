import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { APARTMENTS } from '../data/apartments';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class ApartmentResolverResolver implements Resolve<any> {
  constructor(private http: HttpClient) { }

  public mockApartments: Array<any> = APARTMENTS;
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}
