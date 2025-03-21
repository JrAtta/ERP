import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-safes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './safes.component.html',
  styleUrl: './safes.component.scss'
})
export class SafesComponent {

    safesForm!:FormGroup;
    constructor(private _fb:FormBuilder){
      this.safesForm = this._fb.group({
        name:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],
      });
    }

    submitSafesForm(){
      if(this.safesForm.valid){
        console.log(this.safesForm.value)
      }else{
        this.safesForm.markAllAsTouched();
      }
    }
}
