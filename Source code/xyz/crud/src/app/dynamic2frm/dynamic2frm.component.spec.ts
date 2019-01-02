import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamic2frmComponent } from './dynamic2frm.component';

describe('Dynamic2frmComponent', () => {
  let component: Dynamic2frmComponent;
  let fixture: ComponentFixture<Dynamic2frmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamic2frmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamic2frmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
