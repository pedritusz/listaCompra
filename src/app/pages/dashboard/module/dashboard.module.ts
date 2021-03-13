import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { ItemListModule } from '../../../modules/item-list/item-list-module/item-list/item-list.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SectionItemModule } from 'src/app/modules/section-item/section-item-module/section-item.module';
import { ButtonModule } from 'src/app/modules/button/button-module/button.module';
import { ItemListOfListModule } from '../../../modules/item-list-of-list/item-list-of-list.module';
import { AddButtonModule } from 'src/app/modules/add-button/add-button.module';
import { DashboardService } from 'src/app/services/dashboard.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ItemListOfListModule,
    SectionItemModule,
    ItemListModule,
    ButtonModule,
    DashboardRoutingModule,
    AddButtonModule
  ],
  exports: [
    DashboardComponent
  ],
  providers:[
    DashboardService
  ]
})
export class DashboardModule { }
