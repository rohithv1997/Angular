import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-higlight.directive';
import { AdvanceHighlightDirective } from './directives/advanced-highlight/advance-highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    AdvanceHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
