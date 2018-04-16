import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../interfaces/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // results:Object;

  constructor(private configService: ConfigService,private router: Router) { }

  config : Config;
  configs : any;
  ngOnInit() {
    this.doConfig()
  }
  doConfig() {
    this.configService.authConfig()
      // clone the data object, using its known Config shape
      .subscribe(data => this.configs = data );
  }


}
