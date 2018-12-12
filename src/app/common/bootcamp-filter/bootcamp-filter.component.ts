import { bootcampDetails } from './../../config-file/bootcamp-details';
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bootcamp-filter',
  templateUrl: './bootcamp-filter.component.html',
  styleUrls: ['./bootcamp-filter.component.scss']
})
export class BootcampFilterComponent implements OnInit {
  bootCampData: any;
  title: any;
  id: number;
  type: any;
  image: any;
  text: any;
  summaryText: any;
  value: any;
  selectedItem: any;
  config: any;

  constructor(private router: Router, private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.selectedItem = 1;
    this.bootCampData = bootcampDetails.bootcampList['UX/UI'];
    this.bootCampData = bootcampDetails.bootcampList['DATASCIENCE'];
    this.value = 'All';
    if (screen.width >= 1024) {
      setTimeout(() => {
        document.getElementById('button-basic').click();
        document.getElementById('button-basic').style.display = 'none';
      }, 10);
    }
    this.filterselect('All', 'All', '1');
  }

  filterselect(param, id, index) {
  if (param === 'All') {
      const bootCampDetails = Object.keys(bootcampDetails.bootcampList);
      const arr = [];
      bootCampDetails.forEach(element => {
        Array.prototype.push.apply(arr, bootcampDetails.bootcampList[element]);
      });
      this.bootCampData = arr;
    } else {
      this.bootCampData = new Array(bootcampDetails.bootcampList[param][0]);
    }
    this.selectedItem = param;
    this.selectedItem = index;
    if (param === 'DATASCIENCE') {
      this.value = 'Data Science';
    } else {
      this.value = param;
    }
  }
  routePage(e, arg, id) {
    if (arg === 'DATASCIENCE') {
      this.router.navigate(['/bootcamp/bootcampDetails']);
      arg = 'DATASCIENCE';
      sessionStorage.setItem('tabName', arg);
    }   else if (arg === 'DevOps') {
      this.router.navigate(['/bootcamp/bootcampDetails']);
      arg = 'DevOps';
      sessionStorage.setItem('tabName', arg);
    }  else if (arg === 'UXUI') {
      arg = 'UX/UI';
      window.open('http://bootcamp.littlebrahma.com', '_blank');
    }
  }
}
