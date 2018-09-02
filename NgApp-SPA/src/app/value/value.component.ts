import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConnectionService } from '../Services/api-connection.service';
import { log } from 'util';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(
    // private http: HttpClient,
    private api: ApiConnectionService
  ) {
  }

  ngOnInit() {
    this.api.retrieveData().subscribe(data => {
      this.values = data;
      console.log(this.values);
    });
    console.log(this.values);
    // this.getValues();
  }

  // getValues() {
  //   this.http.get('https://localhost:44343/api/values').subscribe(response => {
  //     this.values = response;
  //   }, error => {

  //   });
  // }
}
