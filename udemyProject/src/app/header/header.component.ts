import { Component, EventEmitter, Output } from '@angular/core';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  recipeLabel = Constants.recipe;
  shoppinglistLabel = Constants.shoppinglist;

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
