import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampDetailsComponent } from './bootcamp-details.component';

describe('BootcampDetailsComponent', () => {
  let component: BootcampDetailsComponent;
  let fixture: ComponentFixture<BootcampDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootcampDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
