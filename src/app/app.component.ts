import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PasswordValidate } from './validator/password-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'password-strength';
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['', PasswordValidate],
    });
  }

}
