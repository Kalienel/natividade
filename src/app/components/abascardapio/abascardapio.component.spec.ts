import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbascardapioComponent } from './abascardapio.component';

describe('AbascardapioComponent', () => {
  let component: AbascardapioComponent;
  let fixture: ComponentFixture<AbascardapioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbascardapioComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbascardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
