import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../interfaces/config';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private configService: ConfigService,private router: Router) { }

  ngOnInit() {
  }
  config : Config;
  configs : any;
  
  
  deleteUser(){
    this.configService.deleteConfig().subscribe()
    this.router.navigate(['/dashboard']);
    return null; 
  }

}
