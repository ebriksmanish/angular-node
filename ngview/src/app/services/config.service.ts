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
  
  configUrl = 'api/users';

  postUrl = 'api/register';

  deleteUrl = 'api/user';

  loginUrl = 'api/login';

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }

  
  /** POST: add a new hero to the database */
  addConfig (config: Config): Observable<Config> {
    return this.http.post<Config>(this.postUrl, config, httpOptions)
  }

  deleteConfig (): Observable<{}> {
    // const url = `${this.deleteUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(this.deleteUrl, httpOptions)
  }

  logConfig (config: Config): Observable<Config> {
    return this.http.post<Config>(this.loginUrl, config, httpOptions)
  }

}
