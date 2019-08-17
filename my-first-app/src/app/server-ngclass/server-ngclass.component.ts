import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-ngclass',
  templateUrl: './server-ngclass.component.html',
  styleUrls: ['./server-ngclass.component.css']
})
export class ServerNgclassComponent implements OnInit {
  serverStatus1: string;
  serverStatus2: string;
  ComponentTitle = 'ngClass Component';
  constructor() {
    this.serverStatus1 = this.getServerStatus();
    this.serverStatus2 = this.getServerStatus();
  }

  ngOnInit() {
  }
  onServerCreate() {
    this.serverStatus1 = this.getServerStatus();
    this.serverStatus2 = this.getServerStatus();
  }
  getServerStatus() {
    return Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColorForServerStatus1() {
    return this.serverStatus1 === 'online' ? 'limegreen' : 'orangered';
  }
  getColorForServerStatus2() {
    return this.serverStatus2 === 'online' ? 'darkgreen' : 'pink';
  }
  getClassForServerStatus1() {
    return this.serverStatus1 === 'online';
  }
  getClassForServerStatus2() {
    return this.serverStatus2 === 'online';
  }
}
