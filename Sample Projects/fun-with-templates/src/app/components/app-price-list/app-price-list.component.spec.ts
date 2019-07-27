import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPriceListComponent } from './app-price-list.component';

describe('AppPriceListComponent', () => {
  let component: AppPriceListComponent;
  let fixture: ComponentFixture<AppPriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPriceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
