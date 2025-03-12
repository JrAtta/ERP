import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-department',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-department.component.html',
  styleUrl: './create-department.component.scss'
})
export class CreateDepartmentComponent {

  createDepartmentForm!:FormGroup;
  constructor(private _FormBuilder:FormBuilder){
    this.createDepartmentForm= this._FormBuilder.group({
            nameAr:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],
    })
  }
  submitCreateDepartmentForm(){
    if(this.createDepartmentForm.valid){
      console.log(this.createDepartmentForm.value)
    }else{
      this.createDepartmentForm.markAllAsTouched();
    }
  }
}
