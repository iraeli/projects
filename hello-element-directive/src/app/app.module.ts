import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MagnifyDirective } from './directives/magnify.directive';
import { DisappearDirective } from './directives/disappear.directive';
import { IsValidDirective } from './directives/is-valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    MagnifyDirective,
    DisappearDirective,
    IsValidDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
