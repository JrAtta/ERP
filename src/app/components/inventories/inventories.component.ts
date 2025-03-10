import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inventories',
  standalone: true,
  imports: [ReactiveFormsModule , ],
  templateUrl: './inventories.component.html',
  styleUrl: './inventories.component.scss'
})
export class InventoriesComponent {
  inventoriesForm!:FormGroup;
  nameAr:string = '';
  constructor(private _FormBuilder:FormBuilder){
    this.inventoriesForm = this._FormBuilder.group({
      nameAr:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],

    });
  }


  submitInventoriesForm(){
      if(this.inventoriesForm.valid){
        console.log(this.inventoriesForm.value)
        this.nameAr = this.inventoriesForm.value.nameAr;
        localStorage.setItem('investory name' , this.nameAr);
      }else{
        this.inventoriesForm.markAllAsTouched();
      }
  }
}
