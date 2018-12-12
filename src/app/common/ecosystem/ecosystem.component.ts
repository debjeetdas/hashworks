import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ecosystem',
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.scss']
})
export class EcosystemComponent implements OnInit {
  @Input() titleText = 'Title';
  @Input() imageUrl: string;
  @Input() btnUrl: string;
  @Input() targetType: string;
  @Input() lbUrl: string;
  @Input() summaryText: string;
  @Input() btnTitle: string;
  @Input() logoUrl: string;

  @Input() targetTypeLb: string;
  @Input() bgColor: string;
  photo: string;
  constructor(private router: Router, private ss: SharedService) {}

  ngOnInit() {}
  locationRef(btnUrl, targetType) {
    if (targetType === '_blank') {
      window.open(btnUrl);
    } else {
      location.href = btnUrl;
      location.reload();
    }
  }
  locationRefLb(lbUrl, targetTypeLb) {
    if (targetTypeLb === '_blank') {
      window.open(lbUrl);
    } else {
      location.href = lbUrl;
      location.reload();
    }
  }
}
