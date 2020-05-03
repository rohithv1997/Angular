import { Component } from '@angular/core';
import { Constants } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: string;

  constructor() {
    this.loadedFeature = Constants.recipe;
  }

  isRecipeSelected(): boolean {
    return this.loadedFeature === Constants.recipe;
  }

  isShoppingListSelected(): boolean {
    return this.loadedFeature === Constants.shoppinglist;
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
