import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe1', 'Recipe 1', 'https://spicysouthernkitchen.com/wp-content/uploads/Rice-Pudding-2.jpg'),
    new Recipe('Recipe2', 'Recipe 2', 'https://bit.ly/36d5zCr')
  ];
  constructor() { }

  ngOnInit() {
  }

}
