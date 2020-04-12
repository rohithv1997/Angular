import { Component } from '@angular/core';
import { ElementDto } from './Helpers/elementdto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'ServerContent1'}];

  onServerCreated(serverData: ElementDto) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintCreated(blueprintData: ElementDto) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
