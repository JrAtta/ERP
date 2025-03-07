import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPass:boolean = false;
  loginForm !:FormGroup;
  constructor(private _FormBuilder: FormBuilder , private _Router : Router){
    this.loginForm = this._FormBuilder.group({
      email: ['',[Validators.required ,Validators.email ]] ,
      password : ['',[Validators.required , Validators.minLength(6)]] , // ASK ABOUT VALIDATION
    });
  }

  submitLoginForm(){
    if(this.loginForm.valid){
      // console.log(this.loginForm)
      this._Router.navigate(['/main']);
    }else{
      this.loginForm.markAllAsTouched();

    }
  }
  showPassValidtiy(){
    this.showPass = !this.showPass;  // true
  }
}
