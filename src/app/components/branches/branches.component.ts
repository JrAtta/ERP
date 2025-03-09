import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export class BranchesComponent {
  branchForm!:FormGroup;
  constructor(private _FormBuilder:FormBuilder){
    this.branchForm = this._FormBuilder.group({
      nameAr:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],
      nameEn:['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)],],
      description:['', [Validators.required]],
    });
  }


  submitBranchForm(){
      if(this.branchForm.valid){
        console.log(this.branchForm.value)
      }else{
        this.branchForm.markAllAsTouched();
      }
  }
}
