import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {
  purchaseForm!:FormGroup;
  constructor(private _fb:FormBuilder){
    this.purchaseForm = this._fb.group({
      codeBill:['',[Validators.required]],


    });
  }

  submitPurchaseForm(){
    if(this.purchaseForm.valid){
      console.log(this.purchaseForm.value)
    }
    else {
      this.purchaseForm.markAllAsTouched();
    }
  }
}
