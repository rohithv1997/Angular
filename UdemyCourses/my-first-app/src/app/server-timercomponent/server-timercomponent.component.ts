import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-timercomponent',
  templateUrl: './server-timercomponent.component.html',
  styleUrls: ['./server-timercomponent.component.css']
})
export class ServerTimercomponentComponent implements OnInit {
  ComponentName = 'Timer Component';
  StartEvent = 'Start Timer';
  ResetEvent = 'Reset Timer';
  timeLeft = 60;
  interval;
  CurrentEvent: string;
  isStartDisabled: boolean;
  isResetDisabled: boolean;
  constructor() {
    this.isStartDisabled = false;
    this.isResetDisabled = true;
    this.CurrentEvent = 'Start Timer';
  }

  ngOnInit() {
  }

  StartOrPauseTimer() {
    if (this.CurrentEvent === 'Start Timer' || this.CurrentEvent === 'Resume Timer') {
      this.startTimer();
      this.CurrentEvent = 'Pause Timer';
    } else if (this.CurrentEvent === 'Pause Timer') {
      this.pauseTimer();
      this.CurrentEvent = 'Resume Timer';
    }
    if (this.timeLeft < 60) { this.isResetDisabled = false; }
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timeLeft > 0 ? this.timeLeft-- : this.timeLeft = 60;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.timeLeft = 60;
    this.CurrentEvent = 'Start Timer';
  }
}
