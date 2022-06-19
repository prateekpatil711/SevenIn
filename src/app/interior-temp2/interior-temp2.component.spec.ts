import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorTemp2Component } from './interior-temp2.component';

describe('InteriorTemp2Component', () => {
  let component: InteriorTemp2Component;
  let fixture: ComponentFixture<InteriorTemp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorTemp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorTemp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
