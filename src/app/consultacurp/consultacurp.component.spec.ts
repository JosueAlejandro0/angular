import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultacurpComponent } from './consultacurp.component';

describe('ConsultacurpComponent', () => {
  let component: ConsultacurpComponent;
  let fixture: ComponentFixture<ConsultacurpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultacurpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultacurpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
