import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cash-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cash-in.component.html',
  styleUrl: './cash-in.component.scss'
})
export class CashInComponent {
  cashInForm!:FormGroup;
  constructor(private  _FormBuilder:FormBuilder){
    this.cashInForm = this._FormBuilder.group({




      paymentMethod:['',[Validators.required]],
    })
  }

  submitCashInForm(){
    if(this.cashInForm.valid){
      console.log(this.cashInForm)
    }
    else{
      this.cashInForm.markAllAsTouched();
    }
  }
}
