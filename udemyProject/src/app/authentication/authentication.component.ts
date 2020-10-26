import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Constants} from '../../helpers/constants';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {AlertComponent} from '../shared/alert/alert.component';
import {PlaceholderDirective} from '../shared/directives/placeholder.directive';
import {Subscription} from 'rxjs';
import * as fromApp from '../../store/IAppState';
import { Store } from '@ngrx/store';
import { LoginStart } from 'src/store/Authentication/Actions/LoginStart';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  private closeSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver,
              private store: Store<fromApp.IAppState>) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.store.select('authentication').subscribe(authState => {
      this.isLoading = authState.isLoading;
      this.error = authState.authError;

      if (this.error){
        this.showErrorAlert(this.error);
        this.flipIsLoading();
      }
      if (authState.user){
        this.flipIsLoading();
      }
    });
  }

  onHandleError(): void {
    this.error = null;
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
    if (!this.signupForm.valid) {
      return;
    }

    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const authObservable =
      this.isLoginMode
        ? this.store.dispatch(new LoginStart({email, password}))
        : this.authenticationService.signUp(email, password);

    this.signupForm.reset();
  }

  get LoginLabel(): string {
    return this.isLoginMode ? Constants.Login : Constants.SignUp;
  }

  get SwitchLabel(): string {
    return Constants.SwitchTo + (this.isLoginMode ? Constants.SignUp : Constants.Login);
  }

  get checkInvalidEmail(): boolean {
    return !this.signupForm.get('email').valid && this.signupForm.get('email').touched;
  }

  get checkInvalidPassword(): boolean {
    return !this.signupForm.get('password').valid && this.signupForm.get('password').touched;
  }

  get invalidSignupForm(): boolean {
    return !this.signupForm.valid;
  }

  private flipIsLoading() {
    this.isLoading = !this.isLoading;
  }

  private showErrorAlert(error: string): void {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.message = error;
    this.closeSubscription = componentRef.instance.alertComponentClose.subscribe(() => {
      this.closeSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy() {
    if (this.closeSubscription){
      this.closeSubscription.unsubscribe();
    }
  }
}
