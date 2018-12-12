import { AppComponent } from './app.component';
import { Injectable, Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
@NgModule({
  imports: [],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class SharedService {
  // Variable Decalarations
  public loc = location.href;
  public locSplit = this.loc.split('/');
  public fbaseUrl = this.locSplit[0] + '//' + this.locSplit[2];
  private newBaseUrl = this.fbaseUrl;
  private url = 'http://localhost:4200';
  constructor(private http: HttpClient) {}
  private config: any = {};

  // Observable string sources
  private bgImage = new Subject<any>();
  private caseStudy = new Subject<any>();

  // Observable string streams
  public bgImage$ = this.bgImage.asObservable();
  public caseStudy$ = this.caseStudy.asObservable();

  backgroundUpdate(param: String) {
    this.bgImage.next(param);
  }
  getRequestfromjson(url) {
    const getUrl = this.url + url;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const getData$ = this.http.get(getUrl, { headers: headers });
    return getData$;
  }

  getValueFromJson() {
    this.getRequestfromjson('/assets/json/config.json').subscribe(
      res => {
        this.config = res;
        return this.config;
      },
      e => {
      }
    );
  }
  caseStudyInfo(type, id) {
    let obj: any;
    obj.type = type;
    obj.id = id;
    this.caseStudy.next(obj);
  }
}
