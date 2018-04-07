import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private configService: ConfigService,private router: Router){

  }  
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;

    
  // }
  canActivate() {
    if(this.configService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }


  }
