import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHiddenEnabled: boolean;
  paragraph1: string;
  currentVariable: number;
  incrementVariable = ['0'];
  buttonName: string;

  constructor() {
    this.currentVariable = 0;
    this.isHiddenEnabled = false;
    this.paragraph1 = 'Secret Password = tuna';
    this.setButtonName();
    if (this.incrementVariable.includes('0')) { this.incrementVariable.pop(); }
  }

  toggleParagraph() {
    this.isHiddenEnabled = !this.isHiddenEnabled;
    this.setButtonName();
    this.currentVariable++;
    this.incrementVariable.push(this.currentVariable.toString());
  }

  setButtonName() {
    this.buttonName = this.isHiddenEnabled ? 'Hide Details' : 'Display Details';
  }

  getColor(val: number) {
    if (this.isCurrentVariableMarkReached(val)) { return 'blue'; }
  }

  getClass(val: number) {
    return this.isCurrentVariableMarkReached(val);
  }

  isCurrentVariableMarkReached(val: number) {
    return val > 4;
  }
}
