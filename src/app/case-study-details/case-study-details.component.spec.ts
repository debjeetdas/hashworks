import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyDetailsComponent } from './case-study-details.component';

describe('CaseStudyDetailsComponent', () => {
  let component: CaseStudyDetailsComponent;
  let fixture: ComponentFixture<CaseStudyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
