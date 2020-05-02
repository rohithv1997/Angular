import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment-start';

  mod = 2;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number): void {
    this.PushIntoNumbers(firedNumber);
    this.LogNumber(firedNumber);
  }

  private PushIntoNumbers(firedNumber: number) {
    if (firedNumber % this.mod === 0) {
      this.PushIntoEvenNumbers(firedNumber);
    } else {
      this.PushIntoOddNumbers(firedNumber);
    }
  }

  private LogNumber(firedNumber: number) {
    console.log(firedNumber);
  }

  private PushIntoEvenNumbers(firedNumber: number) {
    this.evenNumbers.push(firedNumber);
  }

  private PushIntoOddNumbers(firedNumber: number) {
    this.oddNumbers.push(firedNumber);
  }
}
