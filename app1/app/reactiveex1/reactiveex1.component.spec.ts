import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveex1Component } from './reactiveex1.component';

describe('Reactiveex1Component', () => {
  let component: Reactiveex1Component;
  let fixture: ComponentFixture<Reactiveex1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactiveex1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactiveex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
