import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCarouselComponent } from './dashboard-carousel.component';

describe('DashboardCarouselComponent', () => {
  let component: DashboardCarouselComponent;
  let fixture: ComponentFixture<DashboardCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
