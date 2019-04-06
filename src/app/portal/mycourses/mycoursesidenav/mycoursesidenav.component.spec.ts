import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoursesidenavComponent } from './mycoursesidenav.component';

describe('MycoursesidenavComponent', () => {
  let component: MycoursesidenavComponent;
  let fixture: ComponentFixture<MycoursesidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycoursesidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycoursesidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
