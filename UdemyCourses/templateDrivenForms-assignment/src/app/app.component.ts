import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') appForm: NgForm;
  defaultsubscription = 'advanced';

  onSubmit(): void {
    console.log(this.appForm.value);
    alert(this.appForm.value.email);
    alert(this.appForm.value.subscription);
    alert(this.appForm.value.password);
  }
}
