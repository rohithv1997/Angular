import { Action } from '@ngrx/store';
import { IState } from './IState';

export abstract class AbstractStoreAction<T extends IState> implements Action {
  abstract readonly type: string;

  abstract execute(state: T): T;
}
