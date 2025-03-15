import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-purchase',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-purchase.component.html',
  styleUrl: './create-purchase.component.scss'
})
export class CreatePurchaseComponent {
createpurchaseForm!:FormGroup;
  constructor(private _fb:FormBuilder){
    this.createpurchaseForm = this._fb.group({
      codeBill:['',[Validators.required]],


    });
  }

  submitCreatePurchaseForm(){
    if(this.createpurchaseForm.valid){
      console.log(this.createpurchaseForm.value)
    }
    else {
      this.createpurchaseForm.markAllAsTouched();
    }
  }
}
