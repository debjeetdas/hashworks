import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrewComponent } from './grew.component';

describe('GrewComponent', () => {
  let component: GrewComponent;
  let fixture: ComponentFixture<GrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
