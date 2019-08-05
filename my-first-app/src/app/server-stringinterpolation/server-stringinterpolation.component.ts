import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-stringinterpolation',
  templateUrl: './server-stringinterpolation.component.html',
  styleUrls: ['./server-stringinterpolation.component.css']
})
export class ServerStringinterpolationComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  constructor() { }

  ngOnInit() {
  }
  getServerStatus() {
    return 'online';
  }
}
