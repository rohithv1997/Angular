import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  isButtonEnabled = false;
  ComponentTitle = 'property binding';
  constructor() {
    this.isButtonEnabled = false;
    setTimeout(() => { this.isButtonEnabled = true; }, 2000);
   }

  ngOnInit() {
  }
}
