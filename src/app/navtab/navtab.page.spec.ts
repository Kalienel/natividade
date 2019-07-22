import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtabPage } from './navtab.page';

describe('NavtabPage', () => {
  let component: NavtabPage;
  let fixture: ComponentFixture<NavtabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavtabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavtabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
