import { Server } from 'src/Models/server.model';
import { Status } from 'src/Models/Server.Enum';
import { ServerInfo } from 'src/Models/serverInfo.dto';

export class ServersService {
  private servers: Server[] = [];

  constructor() {
    this.servers.push(new Server(1, 'ProductionServer', Status.Online));
    this.servers.push(new Server(2, 'TestServer', Status.Offline));
    this.servers.push(new Server(3, 'DevServer', Status.Offline));
  }

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: ServerInfo) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
