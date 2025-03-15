import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cash-out',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cash-out.component.html',
  styleUrl: './cash-out.component.scss'
})
export class CashOutComponent {
 cashOutForm!:FormGroup;
  constructor(private  _FormBuilder:FormBuilder){
    this.cashOutForm = this._FormBuilder.group({




      paymentMethod:['',[Validators.required]],
    })
  }

  submitCashOutForm(){
    if(this.cashOutForm.valid){
      console.log(this.cashOutForm)
    }
    else{
      this.cashOutForm.markAllAsTouched();
    }
  }
}
