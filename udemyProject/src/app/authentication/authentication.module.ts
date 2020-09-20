import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
    AuthenticationComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AuthenticationRoutingModule
  ]
})

export class AuthenticationModule {

}
