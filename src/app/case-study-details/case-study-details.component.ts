// import { caseStudyDetails } from './../caseStudyDetails';
import { Component, OnInit } from '@angular/core';
import { caseStudyDetails } from '../config-file/caseStudyDetails';
import * as _ from 'lodash';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-case-study-details',
  templateUrl: './case-study-details.component.html',
  styleUrls: ['./case-study-details.component.scss']
})
export class CaseStudyDetailsComponent implements OnInit {
  caseStudyList: any = [];
  problemList: any = [];
  keyList: any = [];
  getList: any = [];
  getObject: any = [];
  constructor() {
  }

  ngOnInit() {
    let loc, getId, getType;
    loc = location.href;
    getId = loc.split('caseStudyDetails')[1].split('/')[2];
    getType = loc.split('caseStudyDetails')[1].split('/')[1];
    const activeFlag = sessionStorage.getItem('activeTab');
    const flag = parseInt(sessionStorage.getItem('filterType'), 10) - 1;
    const caseStudyTypes = sessionStorage.getItem('param');
    this.getList = caseStudyDetails.caseStudy.filter(results => {
       return results.type === getType;
    });
    this.getObject = _.find(this.getList, { id: getId });
    if (caseStudyTypes === 'ALL') {
      this.caseStudyList = this.getObject;
      this.problemList = this.getObject.statementList;
      this.keyList = this.getObject.keyList;
    } else {
      this.caseStudyList = this.getObject;
      this.problemList = this.getObject.statementList;
      this.keyList = this.getObject.keyList;
    }
  }
}
