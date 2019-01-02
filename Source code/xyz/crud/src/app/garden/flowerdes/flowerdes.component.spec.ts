import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerdesComponent } from './flowerdes.component';

describe('FlowerdesComponent', () => {
  let component: FlowerdesComponent;
  let fixture: ComponentFixture<FlowerdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
