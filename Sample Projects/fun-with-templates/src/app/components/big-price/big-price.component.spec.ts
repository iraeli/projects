/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BigPriceComponent } from './big-price.component';

describe('BigPriceComponent', () => {
  let component: BigPriceComponent;
  let fixture: ComponentFixture<BigPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
