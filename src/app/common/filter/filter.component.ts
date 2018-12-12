import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _ from 'lodash';
import { caseStudyDetails } from '../../config-file/caseStudyDetails';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  caseStudyData: any = [];
  title: any;
  id: number;
  type: any;
  image: any;
  summaryText: any;
  param: any;
  selectedItem: any;
  globalParam: any;

  constructor(private router: Router, private route: ActivatedRoute) {}
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
      this.caseStudyData = caseStudyDetails.caseStudy;
    } else {
      param = param.replace(/[^A-Z0-9]+/ig, '');
      this.caseStudyData = caseStudyDetails.caseStudy.filter(results => {
        return results.type === param;
      });
    }
    this.selectedItem = param;
    this.selectedItem = index;
    if (param === 'DataScience') {
      this.param = 'Data Science';
    } else if (param === 'CloudAdoption') {
      this.param = 'Cloud Adoption';
    } else {
      this.param = param;
    }
  }
  routePage(e, arg, id) {
    sessionStorage.setItem('activeTab', arg);
    sessionStorage.setItem('param', this.globalParam);
    sessionStorage.setItem('filterType', id);
    this.router.navigate(['/casestudy/caseStudyDetails', arg, id]);
  }
}
