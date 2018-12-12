import { serviceDetails } from '../config-file/service-Details';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  ServiceList: any = [];
  topics: any = [];
  getObject: any = [];
  getList: any = [];
  constructor() {}

  ngOnInit() {
    let loc, getId, getType;
    loc = location.href;
    getType = loc.split('serviceDetails')[1].split('/')[1];
    const flag = sessionStorage.getItem('clickedType');
    this.loadPage(flag);
    this.getList = serviceDetails.Service.filter(results => {
      return results.type === getType;
   });
  }
  route(arg) {
    this.loadPage(arg);
    window.scrollTo(0, 0);
  }
  loadPage(flag) {
    this.getObject = _.find(this.getList);
    flag = flag.replace(/[^A-Z0-9]+/ig, '');
    this.ServiceList = serviceDetails.Service.filter(results => {
       return results.type.toUpperCase() === flag.toUpperCase();
    });
    this.topics = _.find(this.ServiceList, { id: '1' }).summaryList;
  }
}
