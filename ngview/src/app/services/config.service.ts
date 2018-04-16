import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../interfaces/config';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-access-token': 'myToken'
  })
};

// let Token= localStorage.getItem('token');
// const httpOptions = {
//  headers: new HttpHeaders({
//  'Content-Type':  'application/json',
//  'x-access-token': Token
//    })
//  };


@Injectable()
export class ConfigService {
  // authToken: any;
  myToken : any;

  constructor(private http: HttpClient) { }
  
  configUrl = 'http://localhost:3000/api/users';

  postUrl = 'http://localhost:3000/api/register';

  deleteUrl = 'http://localhost:3000/api/user';

  loginUrl = 'http://localhost:3000/api/login';

  authUrl = 'http://localhost:3000/api/auth/profile';

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


  authConfig() {
    // now returns an Observable of Config
    let myToken = localStorage.getItem('token');
    httpOptions.headers =
    // httpOptions.headers.set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjM4NzUwODEsImV4cCI6MTUyMzk2MTQ4MX0.jjZlZsNPX19ARmm7gVl-skc9FSf9ky4gAmTS-x2yBQA');
    httpOptions.headers.set('x-access-token', myToken);
    return this.http.get<Config>(this.authUrl, httpOptions);
  }

  // results:
  // getToken() {
  //   return localStorage.myToken
  // }


  
  // storeUserData(data) {
  //   localStorage.setItem('token', "kavi");
  //   // this.authToken = token;
  // }
}
