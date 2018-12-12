import { Component, OnInit } from '@angular/core';
import { productServiceConfig } from '../config-file/products-service';
import { product } from '../config-file/product.config';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList = [];
  productIteam: any = [];
  http: any;
  title: any;
  id: number;
  type: any;
  image: any;
  columnTitle: string;
  hovered;
  constructor() { }

  ngOnInit() {
this.productIteam = product.productList.list;
  }
}
