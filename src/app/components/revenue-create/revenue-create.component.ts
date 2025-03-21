import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-revenue-create',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './revenue-create.component.html',
  styleUrl: './revenue-create.component.scss'
})
export class RevenueCreateComponent {
   selectedPaymentMethod:string = 'cash'; // كدا  هيختار نقدي  as default
    craeteRevenueForm!:FormGroup;
    constructor(private _fb:FormBuilder){
      this.craeteRevenueForm = this._fb.group({
        paymentMethod : ['',[Validators.required]]

      })
    }
    submitCraeteRevenueForm(){

    }
}
