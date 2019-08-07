import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { ServerComponent } from './server/server.component';
import { Server2Component } from './server2/server2.component';
import { Server3Component } from './server3/server3.component';
import { ServerStringinterpolationComponent } from './server-stringinterpolation/server-stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ServerEventBindingComponent } from './server-event-binding/server-event-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Server2Component,
    Server3Component,
    ServerStringinterpolationComponent,
    PropertybindingComponent,
    ServerEventBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
