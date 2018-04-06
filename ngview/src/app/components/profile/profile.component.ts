import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../interfaces/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private configService: ConfigService) { }

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