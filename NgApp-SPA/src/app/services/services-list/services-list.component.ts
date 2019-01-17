import { AlertifyService } from './../../_services/alertify.service';
import { Service } from './../../_models/service';
import { Component, OnInit } from '@angular/core';
import { faMoneyCheck, faGrin } from '@fortawesome/free-solid-svg-icons';

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
    this.services.push({
      id: 1,
      title: 'Smart Cards',
      image: 'assets/card.png',
      text: 'Smart cards are the future of smart cities.'
    });
    this.services.push({
      id: 2,
      title: 'Smart Digital Currency',
      image: 'assets/digital_currency.jpg',
      text: 'Digital currency boost the economy.',
      services: [
        {
          id: 1,
          title: 'Track',
          image: 'assets/card.png',
          text: 'testt'
        }
      ]
    });
    this.services.push({
      id: 3,
      title: 'Face recognition',
      image: 'assets/face.jpg',
      text: 'Facial recognition is the future of border control.'
    });
  }
}
