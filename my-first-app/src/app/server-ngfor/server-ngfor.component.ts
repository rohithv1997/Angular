import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-ngfor',
  templateUrl: './server-ngfor.component.html',
  styleUrls: ['./server-ngfor.component.css']
})
export class ServerNgforComponent implements OnInit {

  serverStatus1: string;
  serverStatus2: string;
  serverName: string;
  servers = ['Server1', 'Server2'];
  ComponentTitle = 'ngFor Component';
  constructor() {
    this.serverStatus1 = this.getServerStatus();
    this.serverStatus2 = this.getServerStatus();
    this.serverName = this.getServerName();
  }

  ngOnInit() {
  }
  getServerName() {
    return 'AppServer-NgFor' + Math.random() * 10;
  }
  onServerCreate() {
    this.serverStatus1 = this.getServerStatus();
    this.serverStatus2 = this.getServerStatus();
    this.servers.push(this.getServerName());
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
