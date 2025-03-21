import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-revenue-type',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './revenue-type.component.html',
  styleUrl: './revenue-type.component.scss'
})
export class RevenueTypeComponent {
  revenueForm!:FormGroup;
  constructor(private _fb:FormBuilder){
    this.revenueForm = this._fb.group({
      nameAr:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],
      nameEn:['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)],],
    });
  }

  submitRevenueForm(){
    if(this.revenueForm.valid){
      console.log(this.revenueForm.value)
    }else{
      this.revenueForm.markAllAsTouched();
    }
  }
}
