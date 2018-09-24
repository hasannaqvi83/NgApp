import { Service } from './../../_models/service';
import { Component, OnInit, Input } from '@angular/core';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  @Input()
  public service: Service;
  faMoneyCheck = faMoneyCheck;
  constructor() {}

  ngOnInit() {}
}
