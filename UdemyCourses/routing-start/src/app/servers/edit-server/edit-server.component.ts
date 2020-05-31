import { Component, OnInit, Input } from '@angular/core';
import { ServersService } from 'src/Services/servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ICanComponentDeactivate } from '../../../Services/i-can-deactivate-guard.service';
import { Observable } from 'rxjs';
import { Server } from 'src/Models/server.model';
import { Status } from 'src/Models/Server.Enum';
import { ServerInfo } from 'src/Models/serverInfo.dto';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, ICanComponentDeactivate {
  server: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  serverId: number;
  Online = Status[Status.Online];
  Offline = Status[Status.Offline];

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params.allowEdit === '1';
      }
    );
    this.activatedRoute.queryParams.subscribe();
    this.activatedRoute.fragment.subscribe();
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.serverId = +params.id;
      }
    );
    this.server = this.serversService.getServer(this.serverId);
    this.serverName = this.server.name;
    this.serverStatus = Status[this.server.status];
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, new ServerInfo(this.serverName, Status[this.serverStatus]));
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== Status[this.server.status])
      && !this.changesSaved) {
      return confirm('Do you want to save the changes?');
    } else {
      return true;
    }
  }

}
