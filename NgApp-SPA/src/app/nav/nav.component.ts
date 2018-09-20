import { Component, OnInit } from '@angular/core';

interface UserInfo {
  username: string;
  password: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: UserInfo = { username : '', password : '' };
  test: any;

  constructor() {
  }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
  }
}
