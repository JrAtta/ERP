import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss'
})
export class UnitsComponent {
  unitsForm!:FormGroup;
    name:string = '';
    constructor(private _FormBuilder:FormBuilder){
      this.unitsForm = this._FormBuilder.group({
        name:['', [Validators.required],],

      });
    }


    submitUnitsForm(){
        if(this.unitsForm.valid){
          console.log(this.unitsForm.value)
          this.name = this.unitsForm.value.name;
        }else{
          this.unitsForm.markAllAsTouched();
        }
    }
}
