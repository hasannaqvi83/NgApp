import { AlertifyService } from './../../_services/alertify.service';
import { Service } from './../../_models/service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  services: Service[];
  constructor(private alertify: AlertifyService) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.services = [];
    this.services.push({ id: 1, title: 'test', photoUrl: 'faMoneyCheck' });
    this.services.push({ id: 2, title: 'test2', photoUrl: '' });
    this.services.push({ id: 3, title: 'test3', photoUrl: '' });
  }
}
