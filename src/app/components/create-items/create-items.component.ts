import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-items',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-items.component.html',
  styleUrl: './create-items.component.scss'
})
export class CreateItemsComponent {

  itemsForm!:FormGroup;
    constructor(private _FormBuilder:FormBuilder){
      this.itemsForm = this._FormBuilder.group({
        name: ['',[Validators.required]],
        codeItem: ['',[Validators.required]],
        description: ['',[Validators.required]],
        order: ['',[Validators.required]],
        selectInp: ['',[Validators.required]],

        purchasePrice: ['',[Validators.required]],
        sellingPrice: ['',[Validators.required]],
        wholesalePrice: ['',[Validators.required]],
        semiWholesalePrice: ['',[Validators.required]],
      });
    }


    submitItemsForm(){
        if(this.itemsForm.valid){
          console.log(this.itemsForm.value)

        }else{
          this.itemsForm.markAllAsTouched();
        }
    }

}
