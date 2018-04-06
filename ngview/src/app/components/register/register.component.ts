import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../interfaces/config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password: string;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }
  config : Config;
  configs : any;
  
  showConfig() {
    const newConfig = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    this.configService.addConfig(newConfig)
    .subscribe(config => this.configs.push(config));
  }
}
