import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../interfaces/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(private configService: ConfigService,private router: Router) { }

  ngOnInit() {
  }

  config : Config;
  configs : any;
  
  
  meUser(){
    this.configService.meConfig().subscribe()
    this.router.navigate(['/dashboard']);
    return null; 
  }


}
