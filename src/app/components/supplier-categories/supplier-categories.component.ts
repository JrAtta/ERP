import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier-categories',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './supplier-categories.component.html',
  styleUrl: './supplier-categories.component.scss'
})
export class SupplierCategoriesComponent {
  supplierCatForm!:FormGroup;
  constructor(private _FormBuilder:FormBuilder){
    this.supplierCatForm = this._FormBuilder.group({
      name:['',[Validators.required]],
    })
  }
  submitSupplierForm(){
    if(this.supplierCatForm.valid){
      console.log(this.supplierCatForm.value);
    }
    else{
      this.supplierCatForm.markAllAsTouched();
    }
  }
}
