import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../interfaces/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  // user: any;
  constructor(private configService: ConfigService,private router: Router) { }

  ngOnInit() {
  }
  config : Config;
  configs : any;
  myToken : any;

  
  
  logedConfig() {
    const newConfiged = {
      username: this.username,
      password: this.password,
      myToken : this.myToken
    };
    this.configService.logConfig(newConfiged)
    // .subscribe(config => this.configs);
    .subscribe(data => {
      if(data){
      // this.configService.storeUserData(data);
      this.configs = data;
      localStorage.setItem('token', data.myToken);
      localStorage.setItem('user', JSON.stringify(newConfiged));
      this.router.navigate(['/dashboard']);
      } else{
      this.router.navigate(['/login']);
      }
    } );
    // .subscribe(
    //   res => {
    //     localStorage.setItem('token', myToken)
    //     this.router.navigate(['/dashboard'])
    //   },
    //   err => console.log(err)
    // )  

  }

}
