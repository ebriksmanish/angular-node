import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private configService: ConfigService,private router: Router) { }

  ngOnInit() {
  }
  onLogoutClick(){
    this.configService.logout()
    this.router.navigate(['/login']);
    return false;    
  }

}
