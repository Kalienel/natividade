import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazerPage } from './lazer.page';

describe('LazerPage', () => {
  let component: LazerPage;
  let fixture: ComponentFixture<LazerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
