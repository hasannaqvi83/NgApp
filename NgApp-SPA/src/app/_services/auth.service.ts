import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TitleCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient, private titleCasePipe: TitleCasePipe) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.refreshToken();
          console.log(this.decodedToken);
        }
      })
    );
  }

  userName() {
    return this.titleCasePipe.transform(this.decodedToken.unique_name);
  }

  refreshToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
