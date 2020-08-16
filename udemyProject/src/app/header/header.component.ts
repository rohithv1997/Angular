import {Component} from '@angular/core';
import {Constants} from 'src/helpers/constants';
import {DataStorageService} from "../../services/datastorage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  recipeLabel = Constants.recipe;
  shoppinglistLabel = Constants.shoppinglist;

  constructor(private dataStorageService: DataStorageService) {
  }

  public onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }

  public onFetchData(): void {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
