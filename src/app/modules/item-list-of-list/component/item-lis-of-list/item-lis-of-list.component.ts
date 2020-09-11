import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingListInteface } from 'src/app/interfaces/shopping-list.interface';

@Component({
  selector: 'app-item-lis-of-list',
  templateUrl: './item-lis-of-list.component.html',
  styleUrls: ['./item-lis-of-list.component.scss']
})
export class ItemLisOfListComponent implements OnInit {
  @Input() list: ShoppingListInteface;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClickList = new EventEmitter<string>();
  @Output() onClickListEdit = new EventEmitter<string>();

  stateOfList;
  constructor() {
  }

  ngOnInit(): void {
    this.ComprovateStateOfList();

  }
  toShoppingList($event) {
  this.onClickList.emit($event);
  }
  toShoppingListEdit($event) {
    this.onClickListEdit.emit($event);
  }

  ComprovateStateOfList() {
    if (this.list.shoppingCart.length === this.list.products.length) {
      this.stateOfList = 'all bought';
    } else {
      this.stateOfList = 'products do not buy';
    }
  }
}
