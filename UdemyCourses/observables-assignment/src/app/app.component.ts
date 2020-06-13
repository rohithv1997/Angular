import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public userActivated = false;
  private activatedSubsription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activatedSubsription = this.userService.activatedEmitter.subscribe((didActivate: boolean) => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy() {
    this.activatedSubsription.unsubscribe();
  }
}
