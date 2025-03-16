import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-sell',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-sell.component.html',
  styleUrl: './create-sell.component.scss'
})
export class CreateSellComponent {
createsellForm!:FormGroup;
  constructor(private _fb:FormBuilder){
    this.createsellForm = this._fb.group({
      codeBill:['',[Validators.required]],


    });
  }

  submitCreateSellForm(){
    if(this.createsellForm.valid){
      console.log(this.createsellForm.value)
    }
    else {
      this.createsellForm.markAllAsTouched();
    }
  }
}
