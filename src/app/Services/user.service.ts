import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewModel } from '../models/review-model';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private configuration: ConfigurationService, private http: HttpClient) { }
  public getTopSixReviews(): Observable<ReviewModel[]> {
    return this.http.get<ReviewModel[]>(this.configuration.baseApiFnUrl + 'reviews');
  }
}
