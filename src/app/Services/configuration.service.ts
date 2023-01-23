import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ConfigurationService {

  public get baseApiUrl(): string
    {
       return environment.aylinApiUrl;
    }

    public get baseApiFnUrl(): string
    {
       return environment.aylinApiFnUrl;
    }
}
