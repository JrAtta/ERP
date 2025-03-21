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
  errorMessage!:string | null;
  private readonly ADMIN_EMAIL = 'heka@admin.com';
  private readonly ADMIN_PASS = 'heka1511';
  loginForm !:FormGroup;
  constructor(private _FormBuilder: FormBuilder , private _Router : Router){
    this.loginForm = this._FormBuilder.group({
      email: ['',[Validators.required ,Validators.email ]] ,
      password : ['',[Validators.required , Validators.minLength(6)]] , // ASK ABOUT VALIDATION
    });
  }

  submitLoginForm(){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if(email === this.ADMIN_EMAIL  && password === this.ADMIN_PASS){
      this.errorMessage = null;
      localStorage.setItem('isLoggedIn' , 'true')
      this._Router.navigate(['/main']);
    }else{
      // this.loginForm.markAllAsTouched();
      this.errorMessage = 'الإيميل أو كلمة المرور غير صحيحة';
    }
  }
  showPassValidtiy(){
    this.showPass = !this.showPass;  // true
  }
}
