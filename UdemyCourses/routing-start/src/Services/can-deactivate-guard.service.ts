import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ICanComponentDeactivate } from './i-can-deactivate-guard.service';
import { Observable } from 'rxjs';

export class CanDeactivateGuardService implements CanDeactivate<ICanComponentDeactivate> {
    canDeactivate(component: ICanComponentDeactivate,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return component.canDeactivate();
    }
}
