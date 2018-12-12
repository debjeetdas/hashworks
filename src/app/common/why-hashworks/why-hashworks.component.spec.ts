import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHashworksComponent } from './why-hashworks.component';

describe('WhyHashworksComponent', () => {
  let component: WhyHashworksComponent;
  let fixture: ComponentFixture<WhyHashworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyHashworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyHashworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
