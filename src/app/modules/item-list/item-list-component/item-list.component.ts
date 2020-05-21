import { Component, OnInit, Input } from '@angular/core';
import { ItemListInputInterface } from 'src/app/interfaces/itemListinputInterface';
import { Route } from '@angular/compiler/src/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() ItemListOptions: ItemListInputInterface;
  itemName: string;
  inStockWidth: number;
  inStock: number;
  inStockPercentage: string;
  itemLack: number;
  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {

    this.widthCuantitylItem();
    this.setStock();
    this.itemName = this.ItemListOptions.name;

  }

  setStock() {

    this.inStock = this.ItemListOptions.stock;
    this.itemLack = this.ItemListOptions.minStock - this.inStock;

  }

  widthCuantitylItem() {
    if (this.ItemListOptions.stock > this.ItemListOptions.minStock) {

    this.inStockPercentage = '100%';

    } else {

      this.inStockPercentage = ((100 / this.ItemListOptions.minStock) * this.ItemListOptions.stock).toString() + '%';


    }

    this.inStockWidth = ( 100 / this.ItemListOptions.minStock ) * this.ItemListOptions.stock;

  }

  onClick() {

    console.log( this.ItemListOptions.clickAction );
    this.router.navigate( [this.ItemListOptions.clickAction] );

  }

}
