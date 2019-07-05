import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoPage } from './investimento.page';

describe('InvestimentoPage', () => {
  let component: InvestimentoPage;
  let fixture: ComponentFixture<InvestimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
