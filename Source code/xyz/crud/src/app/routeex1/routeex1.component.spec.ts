import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routeex1Component } from './routeex1.component';

describe('Routeex1Component', () => {
  let component: Routeex1Component;
  let fixture: ComponentFixture<Routeex1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routeex1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routeex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
