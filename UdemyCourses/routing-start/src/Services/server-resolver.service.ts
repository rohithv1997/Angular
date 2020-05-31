import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Server } from 'src/Models/server.model';
import { Observable } from 'rxjs';
import { ServersService } from './servers.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {
    constructor(private serversService: ServersService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.serversService.getServer(+route.params.id);
    }
}
