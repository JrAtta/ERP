import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  private readonly _Router = inject(Router)
  addItem(){
    this._Router.navigate(['/main/items/create'])
  }
}
