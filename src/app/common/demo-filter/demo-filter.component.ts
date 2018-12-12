import { Component, OnInit, Input } from '@angular/core';
// import { bootcampDetails } from './../../config-file/bootcamp-details';
import { SharedService } from './../../shared.service';
import * as _ from 'lodash';
import {demoDetails} from './../../config-file/demo-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-demo-filter',
  templateUrl: './demo-filter.component.html',
  styleUrls: ['./demo-filter.component.scss']
})
export class DemoFilterComponent implements OnInit {
  bootCampData: any;
  param: any;
  @Input() bgColor: string;
  selectedItem: any;
  globalParam: any;

  constructor(private router: Router, private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.param = 'All';
    if (screen.width >= 1024) {
      setTimeout(() => {
        document.getElementById('button-basic').click();
        document.getElementById('button-basic').style.display = 'none';
      }, 10);
    }
    this.filterselect('All', 'All', '1');
  }
  filterselect(param, id, index) {
    this.selectedItem = param;
    this.globalParam = param;
    if (param === 'All') {
      const caseStudy = Object.keys(demoDetails.demoList);
      const arr = [];
      caseStudy.forEach(element => {
        Array.prototype.push.apply(arr, demoDetails.demoList[element]);
      });
      this.bootCampData = arr;
    } else {
      this.bootCampData = demoDetails.demoList[param];
    }
    this.selectedItem = param;
    this.selectedItem = index;
    this.param = param;
  }
}
