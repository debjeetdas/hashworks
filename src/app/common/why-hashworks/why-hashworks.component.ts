import { Component, OnInit } from '@angular/core';
import { hashworks } from './whyHashworks-config';

@Component({
  selector: 'app-why-hashworks',
  templateUrl: './why-hashworks.component.html',
  styleUrls: ['./why-hashworks.component.scss']
})
export class WhyHashworksComponent implements OnInit {
WhyHashworks: any = [];
  constructor() { }

  ngOnInit() {
    this.WhyHashworks = hashworks.why;
  }

}
