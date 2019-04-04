import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudlabComponent } from './cloudlab.component';

describe('CloudlabComponent', () => {
  let component: CloudlabComponent;
  let fixture: ComponentFixture<CloudlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
