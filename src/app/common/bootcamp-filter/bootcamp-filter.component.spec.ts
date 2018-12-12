import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampFilterComponent } from './bootcamp-filter.component';

describe('BootcampFilterComponent', () => {
  let component: BootcampFilterComponent;
  let fixture: ComponentFixture<BootcampFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootcampFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
