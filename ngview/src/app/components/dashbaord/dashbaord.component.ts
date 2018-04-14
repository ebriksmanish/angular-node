import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../interfaces/config';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {
  public myToken: any;
  constructor(private configService: ConfigService,private router: Router) { }

  ngOnInit() {
    this.showConfig()
  }
  config: Config;
  configs : any;

  showConfig() {
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe(data => this.configs = data );
  }

}
