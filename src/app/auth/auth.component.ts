import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATTERNS, ROUTES } from '../shared/constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public formSubmitted: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(PATTERNS.EMAIL),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log('login form', this.loginForm);
  }
  onSignIn() {
    this.router.navigate([ROUTES.SIGNUP]);
    this.formSubmitted = true;
  }
}
