import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../component/dashboard/dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SectionItemModule } from 'src/app/modules/section-item/section-item-module/section-item.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SectionItemModule,
  ],
  exports : [
    DashboardComponent
  ]
})
export class DashboardModule { }
