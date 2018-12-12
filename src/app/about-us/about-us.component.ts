import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Hashworks - About Us');

    meta.addTags([
      { name: 'author',   content: 'Hashworks'},
      { name: 'keywords', content: 'Digital transformation,Website Development,App Development,Hashworks.co,Hashworks Pvt Ltd, UI/UX design studio, web application development, Blockchain thechnology, ICO & cryptoservice enablers, Blockchain enablers, Data Science solutions, Machine Learning solutions, AI solutions, Service design, Product design, startups, Mobile app development, DevOps Engineers, Performance Engineering Bangalore, Data Visualization experts, Dashboards, IT solutions company Bangalore, IT sustainable innovation,  IT delivery organization, Bangalore, India'},
      { name: 'description', content: 'Technology partners for Blockchain, Data Science, DevOps & Cloud. We help enterprises to build decentralized & distributed software services on Blockchain & Cloud native computing.' }
    ]);
   }

  ngOnInit() {
  }

}
