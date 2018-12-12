import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMore() {
    document.getElementById('showMore').style.height = '100%';
    document.getElementById('showMore').style.maxHeight = 'initial';
    document.getElementById('showMoreBtn').style.display = 'none';
  }

}
