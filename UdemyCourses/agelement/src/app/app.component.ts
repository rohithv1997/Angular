import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'agelement';
  content: SafeHtml | undefined;

  constructor(private injector: Injector, private domSanitiser: DomSanitizer) {
    const alertElement = createCustomElement(AlertComponent, {
      injector: this.injector,
    });

    customElements.define('my-alert', alertElement);

    setTimeout(() => {
      // this.content = '<p>A paragraph</p>'
      this.content = domSanitiser.bypassSecurityTrustHtml(
        '<my-alert message="This is a dynamic angular component"></my-alert>'
      );
    }, 1000);
  }
}
