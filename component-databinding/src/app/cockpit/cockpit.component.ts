import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ElementDto } from '../Helpers/elementdto.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ElementDto>();
  @Output() blueprintCreated = new EventEmitter<ElementDto>();
  @ViewChild('serverContentInput') contentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.logInputs(nameInput, this.contentInput.nativeElement.value);
    this.serverCreated.emit(new ElementDto(nameInput.value, this.contentInput.nativeElement.value));
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.logInputs(nameInput, this.contentInput.nativeElement.value);
    this.blueprintCreated.emit(new ElementDto(nameInput.value, this.contentInput.nativeElement.value));
  }

  logInputs(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    console.log(nameInput);
    console.log(contentInput);
  }
}
