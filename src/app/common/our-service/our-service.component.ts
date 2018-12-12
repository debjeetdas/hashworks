import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { productServiceConfig } from '../../config-file/products-service';


@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {
  @Input() titleText = 'Title';
  @Input() titleSummary = 'summary';
  serviceList = [];
  productList = [];
  http: any;
  title: any;
  id: number;
  type: any;
  image: any;
  columnTitle: string;
  hovered;
  btnUrl: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.url === '/service') {
    productServiceConfig.ourService.field.forEach(element => {
      if (element.type === 'service') {
        this.serviceList.push(element);
      }
    });
  }

  if (this.router.url === '/product') {
    productServiceConfig.ourService.field.forEach(element => {
      if (element.type === 'product') {
        this.serviceList.push(element);
      }
    });
  }
  if (this.router.url === '/') {
    productServiceConfig.ourService.field.forEach(element => {
      if (element.type === 'service') {
        this.serviceList.push(element);
      }
    });
  }

  }
  routePage(e, arg, arg1) {
    sessionStorage.setItem('clickedType', arg1);
    if (arg === 'service') {
       this.router.navigate(['/service/serviceDetails']);
     }
    //   else if (arg === 'product') {
    //    if (arg1 === 'Hercules') {
    //     window.open('https://beta.paketo.io/#/product/hercules', '_blank');
    //    } else if (arg1 === 'Swordfish') {
    //     window.open('https://beta.paketo.io/#/product/swordfish', '_blank');
    //    }  else if (arg1 === 'Enigma') {
    //     window.open('https://beta.paketo.io/#/product/enigma', '_blank');
    //    }
    // }
  }

}
