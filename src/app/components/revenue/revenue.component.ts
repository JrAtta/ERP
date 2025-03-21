import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss'
})
export class RevenueComponent {
   constructor(private _Router: Router){}

    createRevenue(){
      this._Router.navigate(['/main/revenue/create'])
    }
}
