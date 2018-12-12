import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-commonbanner',
  templateUrl: './commonbanner.component.html',
  styleUrls: ['./commonbanner.component.scss']
})
export class CommonbannerComponent implements OnInit {
  @Input() titleText = 'Title';
  @Input() imageUrl: string;
  @Input() btnUrl: string;
  @Input() summaryText: string;
  @Input() btnTitle: string;
  photo: string;
  constructor(
    private ss: SharedService
  ) { }

  ngOnInit() {
    // this.photo = '';
  }

}
