import { Component, OnInit } from '@angular/core';
import { productServiceConfig } from '../config-file/products-service';
import { OurServiceComponent } from '../common/our-service/our-service.component';
import { homeContent } from '../config-file/home.config';
import { product } from '../config-file/product.config';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ourWork: any = [];
  product: any = [];
  productIteam: any = [];
  cloud: any = [];
  bussiness: any = [];

  constructor(
    meta: Meta, title: Title
  ) {
    title.setTitle('Hashworks - Digital transformation | Blockchain | Cloud Adoption | DevOps | Data Science');

    meta.addTags([
      { name: 'author',   content: 'Hashworks'},
      { name: 'keywords', content: 'Digital transformation,Website Development,App Development, Digital transformation company,Hashworks.co,Hashworks Pvt Ltd, UI/UX studio Bangalore, web application development, Mobile app development, DevOps Engineers, Performance Engineering Bangalore, Data Visualization experts, Dashboards, Enterprise startup, IT vendor for Captive IT, IT vendor for Enterprise, IT solutions company Bangalore, technology recruitment, IT sustainable innovation,  IT delivery organization, digital innovation IT vendor, Bangalore, India'},
      { name: 'description', content: 'Technology partners for Blockchain, Data Science, DevOps & Cloud. We help enterprises to build decentralized & distributed software services on Blockchain & Cloud native computing.' }
    ]);
  }

  ngOnInit() {
    this.ourWork = homeContent.ourWork;
    this.cloud = homeContent.cloud;
    this.product = product.productList.list;
    this.bussiness = homeContent.business;
    this.productIteam = product.productList.list[0].producrList;
  }

}
