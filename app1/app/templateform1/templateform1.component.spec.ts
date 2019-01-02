import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Templateform1Component } from './templateform1.component';

describe('Templateform1Component', () => {
  let component: Templateform1Component;
  let fixture: ComponentFixture<Templateform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Templateform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Templateform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
