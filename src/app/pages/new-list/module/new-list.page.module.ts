import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewListComponent } from '../component/new-list.page.component';
import {NewListRouterModule} from '../module/new-list.page.routes';


@NgModule({
  declarations: [NewListComponent],
  imports: [
    CommonModule,
    NewListRouterModule
    
  ],
  exports: [
    NewListComponent
  ]
})
export class NewListModule { }
