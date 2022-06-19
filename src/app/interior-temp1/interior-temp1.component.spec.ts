import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorTemp1Component } from './interior-temp1.component';

describe('InteriorTemp1Component', () => {
  let component: InteriorTemp1Component;
  let fixture: ComponentFixture<InteriorTemp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorTemp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorTemp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
