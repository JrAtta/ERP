import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {
  constructor(private _Router: Router){}

  createExpense(){
    this._Router.navigate(['/main/expense/create'])
  }
}
