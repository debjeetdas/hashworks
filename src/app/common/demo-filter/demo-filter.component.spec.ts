import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFilterComponent } from './demo-filter.component';

describe('DemoFilterComponent', () => {
  let component: DemoFilterComponent;
  let fixture: ComponentFixture<DemoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
