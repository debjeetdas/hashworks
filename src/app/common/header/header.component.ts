import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // tabMenu = false;
  search = false;
  gcsesearch: SafeHtml;
  constructor(  private sanitizer: DomSanitizer, ) { }

  ngOnInit() {
      this.gcsesearch = this.sanitizer.bypassSecurityTrustHtml('<gcse:search></gcse:search>');
      const cx = '009607332871883369961:or9gqx2hqec';
      const gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    s.parentNode.insertBefore(gcse, s);
  }
  closeMenu() {
    if (window.innerWidth < 1024) {
      document.getElementById('menu-btn').click();
    }
  }
}
