import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { AppPriceListComponent } from './components/app-price-list/app-price-list.component';
import { BigPriceComponent } from './components/big-price/big-price.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    AppPriceListComponent,
    BigPriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppPriceListComponent]
})
export class AppModule { }
