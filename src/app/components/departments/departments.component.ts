import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {
  private readonly _Router = inject(Router);

  createDepartment(){
    this._Router.navigate(['/main/departments/create']);
  }
}
