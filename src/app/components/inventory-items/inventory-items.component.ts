import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-items',
  standalone: true,
  imports: [],
  templateUrl: './inventory-items.component.html',
  styleUrl: './inventory-items.component.scss'
})
export class InventoryItemsComponent implements OnInit{

  investoryName:string = '';

ngOnInit(): void {
 if(typeof localStorage !== 'undefined'){
  this.investoryName = localStorage.getItem('investory name')!;
 }
  console.log(this.investoryName)
}

}
