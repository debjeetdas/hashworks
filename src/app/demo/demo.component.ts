import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  showMore() {
    document.getElementById('showMore').style.height = '100%';
    document.getElementById('showMore').style.maxHeight = 'initial';
    document.getElementById('showMoreBtn').style.display = 'none';
  }

}
