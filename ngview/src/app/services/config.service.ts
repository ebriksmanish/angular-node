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
  getUrl = 'http://localhost:3000/api/users';
  deleteUrl = 'http://localhost:3000/api/user';

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.getUrl);
  }
  deleteConfig (): Observable<{}> {
    // const url = `${this.deleteUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(this.deleteUrl, httpOptions)
    }

}