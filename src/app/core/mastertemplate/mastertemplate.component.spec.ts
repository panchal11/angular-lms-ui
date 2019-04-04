import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastertemplateComponent } from './mastertemplate.component';

describe('MastertemplateComponent', () => {
  let component: MastertemplateComponent;
  let fixture: ComponentFixture<MastertemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastertemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastertemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
