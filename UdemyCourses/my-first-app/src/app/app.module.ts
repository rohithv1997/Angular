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
import { ServerTimercomponentComponent } from './server-timercomponent/server-timercomponent.component';
import { ServerNgifComponent } from './server-ngif/server-ngif.component';
import { ServerNgStyleComponent } from './server-ng-style/server-ng-style.component';
import { ServerNgclassComponent } from './server-ngclass/server-ngclass.component';
import { ServerNgforComponent } from './server-ngfor/server-ngfor.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Server2Component,
    Server3Component,
    ServerStringinterpolationComponent,
    PropertybindingComponent,
    ServerEventBindingComponent,
    ServerTimercomponentComponent,
    ServerNgifComponent,
    ServerNgStyleComponent,
    ServerNgclassComponent,
    ServerNgforComponent
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
