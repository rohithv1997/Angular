import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/Services/servers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Server } from 'src/Models/server.model';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(): void {
    // this.router.navigate(['servers'], { relativeTo: this.activatedRoute});
  }
}
