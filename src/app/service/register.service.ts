import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {SignInForm} from "../model/SignInForm";


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
private API_SIGNUP = environment.API_URL + '/signup';
private API_SIGNIN = environment.API_URL + '/signin';

  constructor(private http: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<any>{
  return this.http.post<any>(this.API_SIGNUP, signUpForm);
  }

  logIn(signInForm: SignInForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNIN, signInForm );
  }
}
