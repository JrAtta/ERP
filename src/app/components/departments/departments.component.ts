import { Component, inject } from '@angular/core';
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

  creatDepartment(){
    this._Router.navigate(['/main/departments/create']);
  }
}
