import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-items',
  standalone: true,
  imports: [],
  templateUrl: './inventory-items.component.html',
  styleUrl: './inventory-items.component.scss'
})
export class InventoryItemsComponent implements OnInit{

  inventoryName:string = '';

ngOnInit(): void {
 if(typeof localStorage !== 'undefined'){
  this.inventoryName = localStorage.getItem('inventory name')!;
 }
  console.log(this.inventoryName)
}

}
