import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-admin-create',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './admin-create.component.html',
  styleUrl: './admin-create.component.scss'
})
export class AdminCreateComponent {
  showPass:boolean = false;

  showPassValidtiy(){
    this.showPass = !this.showPass;  // true
  }
  createAdminForm!:FormGroup;
  constructor(private _fb: FormBuilder) {
    this.createAdminForm = this._fb.group(
      {
        img: [null], // Custom Validation
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        branch: ['', [Validators.required]],
        password: ['', [Validators.required,Validators.minLength(6)]],
        passwordConfirm: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator } // Validator على مستوى الفورم
    );
  }



  passwordMatchValidator(g:AbstractControl) : { [key :string] :boolean  } | null{
    const pass = g.get('password')?.value;
    const confirmPass = g.get('passwordConfirm')?.value;
    if(pass === confirmPass){
      return null
    } else{
      return {'mismatch' : true}
    }
  }
  submitform(){
    console.log(this.createAdminForm)
    if (this.createAdminForm.valid) {
      console.log(this.createAdminForm.value)
    }
    else{
      this.createAdminForm.markAllAsTouched();
      this.createAdminForm.setErrors({  'mismatch'  :true });
    }
  }


  // for Image

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
