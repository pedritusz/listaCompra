import { Component, OnInit, Input } from '@angular/core';
import { ItemListInputInterface } from 'src/app/interfaces/itemListinputInterface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() ItemListOptions: ItemListInputInterface;
  itemName:string;
  inStockWidth:number;
  inStock: number;
  inStockPercentage: string;
  itemLack:number;
  constructor() { }

  ngOnInit(): void {
    this.widthCuantitylItem();
    this.itemName = this.ItemListOptions.name;
    this.inStock = this.ItemListOptions.stock;
    this.itemLack = this.ItemListOptions.minStock - this.inStock;
  }

  widthCuantitylItem() {
console.log(this.ItemListOptions.cuantityType);

    this.inStockPercentage = ((100/this.ItemListOptions.minStock)*this.ItemListOptions.stock).toString() + '%'
    this.inStockWidth = (100/this.ItemListOptions.minStock)*this.ItemListOptions.stock;
  }

}
