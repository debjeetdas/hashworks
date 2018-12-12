import { SharedService } from './shared.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CommonbannerComponent } from './common/commonbanner/commonbanner.component';
import { HelpComponent } from './common/help/help.component';
import { WhyHashworksComponent } from './common/why-hashworks/why-hashworks.component';
import { OurServiceComponent } from './common/our-service/our-service.component';
import { ServicesComponent } from './services/services.component';
import { BannerComponent } from './common/banner/banner.component';
import { EcosystemComponent } from './common/ecosystem/ecosystem.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CaseStudyDetailsComponent } from './case-study-details/case-study-details.component';
import { GrewComponent } from './grew/grew.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { CareerDetailsComponent } from './career-details/career-details.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { BootcampDetailsComponent } from './bootcamp-details/bootcamp-details.component';
import { DemoComponent } from './demo/demo.component';
import { FilterComponent } from './common/filter/filter.component';
import { BootcampFilterComponent } from './common/bootcamp-filter/bootcamp-filter.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SlickModule } from 'ngx-slick';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import {BreadcrumbsModule} from 'ng2-breadcrumbs';
import { DemoFilterComponent } from './common/demo-filter/demo-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CommonbannerComponent,
    HelpComponent,
    WhyHashworksComponent,
    OurServiceComponent,
    ServicesComponent,
    BannerComponent,
    EcosystemComponent,
    CaseStudyComponent,
    CaseStudyDetailsComponent,
    GrewComponent,
    AboutUsComponent,
    ContactUsComponent,
    CareerComponent,
    CareerDetailsComponent,
    BootcampComponent,
    BootcampDetailsComponent,
    DemoComponent,
    FilterComponent,
    BootcampFilterComponent,
    ServiceDetailsComponent,
    BreadcrumbComponent,
    DemoFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    SlickModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BreadcrumbsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
