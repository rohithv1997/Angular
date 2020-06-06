import { Component } from '@angular/core';
import { Constants } from 'src/helpers/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  recipeLabel = Constants.recipe;
  shoppinglistLabel = Constants.shoppinglist;
}
