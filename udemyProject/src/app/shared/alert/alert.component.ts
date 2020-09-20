import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() alertComponentClose = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.alertComponentClose.emit();
  }
}
