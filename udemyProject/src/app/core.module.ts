import {NgModule} from '@angular/core';
import {ShoppingListService} from '../services/shoppinglist.service';
import {RecipeService} from '../services/recipe.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthenticationInterceptorService} from '../services/authentication-interceptor.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptorService,
      multi: true
    }
  ]
})

export class CoreModule {

}
