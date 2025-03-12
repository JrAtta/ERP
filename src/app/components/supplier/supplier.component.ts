import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss'
})
export class SupplierComponent {
  supplierForm!:FormGroup;
  startingBalance:boolean = false;
  constructor(private _FormBuilder:FormBuilder){
    this.supplierForm = this._FormBuilder.group({
      nameAr:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],
      nameEn:['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)],],
    })
  }
  submitSupplierForm(){
    if(this.supplierForm.valid){
      console.log(this.supplierForm.value);
    }
    else{
      this.supplierForm.markAllAsTouched();
    }
  }
  toggleStartingBalance(){
    this.startingBalance = !this.startingBalance
  }
}
