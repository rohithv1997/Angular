import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-ngif',
  templateUrl: './server-ngif.component.html',
  styleUrls: ['./server-ngif.component.css']
})
export class ServerNgifComponent implements OnInit {
  isButtonEnabled = false;
  ComponentTitle = 'event binding';
  serverCreationStatus = 'NotCreated';
  serverStatus = 'Not initialised';
  serverCreated = false;
  constructor() {
    this.isButtonEnabled = false;
    setTimeout(() => { this.isButtonEnabled = true; }, 2000);
  }

  ngOnInit() {
  }
  onServerCreate() {
    this.serverCreationStatus = 'Server Created';
    this.serverCreated = true;
  }
  onInputServerName(event: Event) {
    this.serverStatus = (event.target as HTMLInputElement).value;
  }
}
