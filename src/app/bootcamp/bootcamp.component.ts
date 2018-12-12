import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  showMore() {
    document.getElementById('showMore').style.height = '100%';
    document.getElementById('showMore').style.maxHeight = 'initial';
    document.getElementById('showMoreBtn').style.display = 'none';
  }

}
