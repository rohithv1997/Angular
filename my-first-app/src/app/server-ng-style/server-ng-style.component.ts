import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-ng-style',
  templateUrl: './server-ng-style.component.html',
  styleUrls: ['./server-ng-style.component.css']
})
export class ServerNgStyleComponent implements OnInit {
  serverStatus1: string;
  serverStatus2: string;
  ComponentTitle = 'ngServe Component';
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
    return this.serverStatus1 === 'online' ? 'green' : 'red';
  }
  getColorForServerStatus2(){
    return this.serverStatus2 === 'online' ? 'lightgreen' : 'pink';
  }
}
