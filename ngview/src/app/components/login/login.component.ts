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
  email: string;
  password: string;

  constructor(private configService: ConfigService,private router: Router) { }

  ngOnInit() {
  }
  config : Config;
  configs : any;
  
  
  logedConfig() {
    const newConfiged = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    this.configService.logConfig(newConfiged)
    .subscribe(data => {
        if(this.configs = data ){
          this.configs.storeUserData(data); 
          this.router.navigate(['/dashboard']);
          return false;    
        }
        else{
          this.router.navigate(['/login']);
          return false;    
        }
      });
  }

}
