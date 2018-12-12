import { DemoComponent } from './demo/demo.component';
import { BootcampDetailsComponent } from './bootcamp-details/bootcamp-details.component';
import { CareerDetailsComponent } from './career-details/career-details.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { CareerComponent } from './career/career.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { BannerComponent } from './common/banner/banner.component';
import { GrewComponent } from './grew/grew.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CaseStudyDetailsComponent } from './case-study-details/case-study-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

export const router: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: '', component: HomeComponent, data: { breadcrumb: '' }
  },
  {
    path: 'product', component: ProductComponent, data: { breadcrumb: 'product' }
  },
  {
    path: 'service', component: ServicesComponent, data: { breadcrumb: 'service' }
  },
  {
    path: 'service/serviceDetails', component: ServiceDetailsComponent, data: { breadcrumb: 'service/serviceDetails' }
  },
  {
    path: 'grew', component: GrewComponent, data: { breadcrumb: 'grew' }
  },
  {
    path: 'about', component: AboutUsComponent, data: { breadcrumb: 'about' }
  },
  {
    path: 'casestudy', component: CaseStudyComponent, data: { breadcrumb: 'casestudy' }
  },
  {
    path: 'bootcamp', component: BootcampComponent, data: { breadcrumb: 'bootcamp' }
  },
  {
    path: 'bootcamp/bootcampDetails', component: BootcampDetailsComponent, data: { breadcrumb: 'bootcamp/bootcampDetails' }
  },
  {
    path: 'contact', component: ContactUsComponent, data: { breadcrumb: 'contact' }
  },
  {
    path: 'career', component: CareerComponent, data: { breadcrumb: 'career' }
  },
  {
    path: 'casestudy/caseStudyDetails/:type/:id',
    component: CaseStudyDetailsComponent,
    data: { breadcrumb: 'casestudy/caseStudyDetails' }
  },
  {
    path: 'career/careerdetails', component: CareerDetailsComponent, data: { breadcrumb: 'career/careerdetails' }
  },
  {
    path: 'demo', component: DemoComponent, data: { breadcrumb: 'demo' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(router, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(router);
