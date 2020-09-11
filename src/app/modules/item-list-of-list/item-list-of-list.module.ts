import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemLisOfListComponent } from './component/item-lis-of-list/item-lis-of-list.component';



@NgModule({
  declarations: [ItemLisOfListComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ItemLisOfListComponent
  ]
})
export class ItemListOfListModule { }
