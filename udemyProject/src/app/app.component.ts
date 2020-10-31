import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutoLogin } from 'src/store/Authentication/Actions/AutoLogin';
import * as fromApp from '../store/IAppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.IAppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new AutoLogin());
  }
}
