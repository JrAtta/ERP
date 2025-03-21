import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  orderForm!:FormGroup;
  constructor(private _fb : FormBuilder,private _Router :Router){
    this.orderForm = this._fb.group({
      code :['',[Validators.required]]
    });
  }

  submitOrderForm(){
    if(this.orderForm.valid){
      console.log(this.orderForm.value);
    }
    else{
      this.orderForm.markAllAsTouched();
    }
  }

  addOrder(){
    this._Router.navigate(['/main/order/create'])
  }
}
