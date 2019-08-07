import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-timercomponent',
  templateUrl: './server-timercomponent.component.html',
  styleUrls: ['./server-timercomponent.component.css']
})
export class ServerTimercomponentComponent implements OnInit {
  ComponentName = 'Timer Component';
  StartEvent = 'Start Timer';
  PauseEvent = 'Pause Timer';
  ResetEvent = 'Reset Timer';
  timeLeft = 60;
  interval;
  constructor() { }

  ngOnInit() {
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
  }
}
