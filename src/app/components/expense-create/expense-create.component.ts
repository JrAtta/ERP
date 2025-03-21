import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-create',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './expense-create.component.html',
  styleUrl: './expense-create.component.scss'
})
export class ExpenseCreateComponent {

  selectedPaymentMethod:string = 'cash'; // كدا  هيختار نقدي  as default
  craeteExpenseForm!:FormGroup;
  constructor(private _fb:FormBuilder){
    this.craeteExpenseForm = this._fb.group({
      paymentMethod : ['',[Validators.required]]
      
    })
  }
  submitCraeteExpenseForm(){

  }
}
