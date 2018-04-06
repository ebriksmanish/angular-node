import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../interfaces/config';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/api/register';
  
  /** POST: add a new hero to the database */
  addConfig (config: Config): Observable<Config> {
    return this.http.post<Config>(this.configUrl, config, httpOptions)
  }
}
