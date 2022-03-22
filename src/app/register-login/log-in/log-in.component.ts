import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "../../service/register.service";
import {SignInForm} from "../../model/SignInForm";
import {Router} from "@angular/router";
import {Account} from "../../model/Account";
import {JwtResponse} from "../../model/JwtResponse";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  signInForm! : SignInForm;
  token!: string;
  account!: Account;

  loginForm = new FormGroup({
    'username': new FormControl(),
    'password': new FormControl()
  })

  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
  const signInForm = this.loginForm.value;
  this.registerService.logIn(signInForm).subscribe((data) => {
    window.sessionStorage.setItem('token', JSON.stringify(data.token));
    window.sessionStorage.setItem('account', JSON.stringify(data.account));
    this.router.navigate(['/dishes']);

    let n: any;
    n = setTimeout(function () {
      window.location.reload();
    }, 2000);

  })
  }
}
