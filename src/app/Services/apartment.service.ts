import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApartmentModel } from '../models/apartment-model';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';

interface IApartmentService {
  getApartments(): Observable<ApartmentModel[]>;
}
@Injectable()
export class ApartmentService implements IApartmentService {

  constructor(private httpService: HttpClient, private configurationService: ConfigurationService) { }

  public getApartments(): Observable<ApartmentModel[]> {
    return this.httpService
      .get<ApartmentModel[]>(this.configurationService.baseApiFnUrl + 'apartments');
  }

  public getApartment(id: number): Observable<ApartmentModel> {
    return this.httpService
      .get<ApartmentModel>(this.configurationService.baseApiFnUrl + 'apartment/' + id);
  }
}
