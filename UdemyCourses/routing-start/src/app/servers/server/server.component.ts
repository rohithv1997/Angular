import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/Services/servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Server } from 'src/Models/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const id = +this.activatedRoute.snapshot.params.id;
    // this.server = this.serversService.getServer(id);
    // this.activatedRoute.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params.id);
    //   }
    // );
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        this.server = data.server;
      }
    );
  }

  onEdit(): void {
    const id = +this.activatedRoute.snapshot.params.id;
    // this.router.navigate(['/servers', id, 'edit']);
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
  }

}
