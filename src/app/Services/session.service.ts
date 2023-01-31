import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

import { SessionModel } from '../models/session-model';
import { ConfigurationService } from './configuration.service';


@Injectable()
export class SessionService {
  public session = new SessionModel();
  public currencyIso = '';
  public dateFormat = '';
  public languageCode = '';

  constructor(private configuration: ConfigurationService,
    private router: Router,
    private http: HttpClient) {}

  sessionExists(): Observable<boolean> {
    // handle logged in user later
    return this.http.get<SessionModel>(this.configuration.baseApiFnUrl + 'session').pipe(mergeMap(sessionData => {
      if (sessionData) {
        this.setSessionVariables(sessionData);
        return observableOf(true);
      } else {
        return observableOf(false);
      }
    }));
  }

  async loadUserData(): Promise<any> {
    const userSessionDataPromise = this.http.get<any>(this.configuration.baseApiFnUrl + 'session')
      .toPromise()
      .then(sessionData => {
        this.setSessionVariables(sessionData);
      }
      );
    return userSessionDataPromise;
  }

  setSessionVariables(sessionData: any) {
    var userSelectedLanguage = localStorage.getItem('language');
    if (userSelectedLanguage && userSelectedLanguage !== "undefined") {
      this.languageCode = userSelectedLanguage;
      this.session.LanguageCode = userSelectedLanguage;
    }
    else {
      this.languageCode = sessionData.languageCode;
      this.session.LanguageCode = sessionData.languageCode;
    }
    this.dateFormat = sessionData.dateFormat;
    this.currencyIso = sessionData.currencyIso;
    this.session.DateFormat = sessionData.dateFormat;
    this.session.CurrencyIso = sessionData.currencyIso;
    this.session.loggedInGuest = sessionData.loggedInGuest;

  }

}
