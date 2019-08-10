import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-event-binding',
  templateUrl: './server-event-binding.component.html',
  styleUrls: ['./server-event-binding.component.css']
})
export class ServerEventBindingComponent implements OnInit {
  isButtonEnabled = false;
  ComponentTitle = 'event binding';
  serverCreationStatus = 'NotCreated';
  serverStatus = '';
  constructor() {
    this.isButtonEnabled = false;
    setTimeout(() => { this.isButtonEnabled = true; }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreationStatus = 'Server Created';
  }
  onInputServerName(event: Event) {
    this.serverStatus = (event.target as HTMLInputElement).value;
  }
}
