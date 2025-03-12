import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-items',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './create-items.component.html',
  styleUrl: './create-items.component.scss'
})
export class CreateItemsComponent {
  addSubItem:boolean = false;
  itemsForm!:FormGroup;
    constructor(private _FormBuilder:FormBuilder){
      this.itemsForm = this._FormBuilder.group({
        name: ['',[Validators.required]],
        codeItem: ['',[Validators.required]],
        description: ['',[Validators.required]],
        order: ['',[Validators.required]],
        selectInp: ['',[Validators.required]],
        selectInp2: ['',[Validators.required]],
        imgInp: ['',[Validators.required]],

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

    toggleAddSubItem(){
      // this.addSubItem = ! this.addSubItem ; // to open and close addSec when click
      this.addSubItem = true; // to add only

    }

  imagePreview: string | ArrayBuffer | null = null;
  errorMessage: string = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];

      // Validation: Check if the file is an image
      if (!file.type.startsWith('image/')) {
        this.errorMessage = 'الملف لازم يكون صورة (مثل .jpg أو .png)';
        this.imagePreview = null; // Reset preview if invalid
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB in bytes
        this.errorMessage = 'حجم الصورة كبير أوي (الحد الأقصى 2 ميجا)';
        this.imagePreview = null;
        return;
      }

      // Clear error if file is valid
      this.errorMessage = '';

      // Read and display the image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Store the image data for preview
      };
      reader.readAsDataURL(file); // Convert file to base64 for display
    }

  }

}
