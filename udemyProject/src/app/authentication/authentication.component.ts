import {Component, OnInit} from '@angular/core';
import {Constants} from "../../helpers/constants";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  signupForm: FormGroup;
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
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
        ? this.authenticationService.login(email, password)
        : this.authenticationService.signUp(email, password);

    this.flipIsLoading();

    authObservable.subscribe(
      response => {
        console.log(response);
        this.flipIsLoading();
        this.router.navigateByUrl('/recipes');
      },
      errorMessage => {
        console.log(errorMessage);
        this.flipIsLoading();
        this.error = errorMessage;
      });

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
}
