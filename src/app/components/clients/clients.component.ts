import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  clientsForm!:FormGroup;
  startingBalance:boolean = false;
  constructor(private _FormBuilder:FormBuilder){
    this.clientsForm = this._FormBuilder.group({
      nameAr:['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)],],
      nameEn:['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)],],
    })
  }
  submitClientsForm(){
    if(this.clientsForm.valid){
      console.log(this.clientsForm.value);
    }
    else{
      this.clientsForm.markAllAsTouched();
    }
  }
  toggleStartingBalance(){
    this.startingBalance = !this.startingBalance
  }
}
