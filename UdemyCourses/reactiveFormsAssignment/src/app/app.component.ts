import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.validateName.bind(this)], [this.validateNameAsync]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null)
    });
  }

  validateName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { TestFound: true };
    }
    return null;
  }

  validateNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Prod') {
          resolve({ ProdFound: true });
        } else {
          return resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

  onSubmit(): void {
    console.log(this.projectForm);
  }
}
