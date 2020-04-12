import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ElementDto } from '../Helpers/elementdto.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<ElementDto>();
  @Output() blueprintCreated = new EventEmitter<ElementDto>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit(new ElementDto(this.newServerName, this.newServerContent));
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(new ElementDto(this.newServerName, this.newServerContent));
  }
}
