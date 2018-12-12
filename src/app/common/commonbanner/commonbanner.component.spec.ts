import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonbannerComponent } from './commonbanner.component';

describe('CommonbannerComponent', () => {
  let component: CommonbannerComponent;
  let fixture: ComponentFixture<CommonbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
