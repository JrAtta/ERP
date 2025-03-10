import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {
 optionsForm!:FormGroup;
  nameAr:string = '';
  constructor(private _FormBuilder:FormBuilder){
    this.optionsForm = this._FormBuilder.group({
      nameAr:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],
    });
  }


  submitOptionsForm(){
      if(this.optionsForm.valid){
        console.log(this.optionsForm.value)
        this.nameAr = this.optionsForm.value.nameAr;
      }else{
        this.optionsForm.markAllAsTouched();
      }
  }
}
