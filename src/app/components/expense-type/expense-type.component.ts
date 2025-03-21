import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-type',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expense-type.component.html',
  styleUrl: './expense-type.component.scss'
})
export class ExpenseTypeComponent {
  expenseForm!:FormGroup;
    constructor(private _fb:FormBuilder){
      this.expenseForm = this._fb.group({
        nameAr:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],
        nameEn:['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)],],
      });
    }

    submitExpenseForm(){
      if(this.expenseForm.valid){
        console.log(this.expenseForm.value)
      }else{
        this.expenseForm.markAllAsTouched();
      }
    }
}
