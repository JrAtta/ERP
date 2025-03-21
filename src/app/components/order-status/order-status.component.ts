import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.scss'
})
export class OrderStatusComponent {
  orderStatusForm!:FormGroup;
  constructor(private _fb:FormBuilder){
    this.orderStatusForm = this._fb.group({
      nameAr:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],
      nameEn:['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)],],
    });
  }

  submitOrderStatusForm(){
    if(this.orderStatusForm.valid){
      console.log(this.orderStatusForm.value)
    }else{
      this.orderStatusForm.markAllAsTouched();
    }
  }
}
