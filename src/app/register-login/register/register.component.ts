import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {RegisterService} from "../../service/register.service";
import {SignUpForm} from "../../model/SignUpForm";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status!: string;
  signUpForm!: SignUpForm;

  registerForm = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'username': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required),
    'roles': new FormControl(['STAFF']),
  })

  userError: any = {
    message: 'The username existed.'
  }

  emailError: any = {
    message: 'The email existed.'
  }

  success: any = {
    message: "Create Account success."
  }

  constructor(private registerService: RegisterService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.signUpForm = this.registerForm.value;
    console.log('registerForm', this.signUpForm);
    this.registerService.signUp(this.signUpForm).subscribe((data) => {
      console.log('singUpForm --->', data)
      if (JSON.stringify(data) == JSON.stringify(this.userError)) {
        this.status = 'The username existed.'
      }
      if (JSON.stringify(data) == JSON.stringify(this.emailError)) {
        this.status = 'The email existed.'
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        alert( 'Create Account success.')
      }
    })
    // let n: any;
    // n = setTimeout(function () {
    //   window.location.reload();
    // }, 2000);

  }
}

