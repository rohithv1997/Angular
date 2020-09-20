import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {AuthenticationGuardService} from '../../services/authentication-guard.service';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeResolverService} from '../../services/recipe-resolver.service';
import {RecipesComponent} from './recipes.component';


const routes: Routes = [
  {
    path: 'recipes',
    children: [
      {
        path: '',
        component: RecipeStartComponent,
        canActivate: [
          AuthenticationGuardService
        ]
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService]
      }
    ],
    component: RecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
