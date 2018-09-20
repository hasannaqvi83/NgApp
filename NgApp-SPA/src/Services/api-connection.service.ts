import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { log } from 'util';
import { Subscriber, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  data: any;

  constructor(private http: HttpClient) { }

  retrieveData(): Observable<any> {
   return this.http.get('http://localhost:5000/api/values');
  }

}
