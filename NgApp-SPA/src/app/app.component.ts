import { AuthService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, public sanitizer: DomSanitizer) {
  }
  ngOnInit() {
    this.authService.refreshToken();
  }
}
