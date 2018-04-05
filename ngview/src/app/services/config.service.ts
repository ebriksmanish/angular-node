import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../interfaces/config';


@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }
  
  configUrl = 'http://localhost:3000/api/users';

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }
}
