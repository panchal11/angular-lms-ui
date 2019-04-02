import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventnavComponent } from './eventnav.component';

describe('EventnavComponent', () => {
  let component: EventnavComponent;
  let fixture: ComponentFixture<EventnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
