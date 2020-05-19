import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruevasComponent } from './pruevas.component'
import {AlertMessageModule} from '../../modules/alert-message/alert-message-module/alert-message/alert-message.module'
import {ButtonModule} from '../../modules/button/button-module/button.module'
import {HeaderModule} from '../../modules/header/header-module/header/header.module'
import {HorizontaScrollContainerModule} from '../../modules/horizontal-scroll-container/horizontal-scroll-container-module/horizonta-scroll-container/horizonta-scroll-container.module'
import {ItemListModule} from '../../modules/item-list/item-list-module/item-list/item-list.module'
import {MainItemBodyModule} from '../../modules/main-item-body/main-item-body-module/main-item-body/main-item-body.module'
import {SectionItemModule} from '../../modules/section-item/section-item-module/section-item.module'
import { RouterModule } from '@angular/router';
import { PruevasRouterModule } from './pruevas.routes'


@NgModule({
  declarations: [
    PruevasComponent
  ],
  imports: [
    CommonModule,
    PruevasRouterModule,
    AlertMessageModule,
    ButtonModule,
    HeaderModule,
    HorizontaScrollContainerModule,
    ItemListModule,
    LoginFormModule,
    MainItemBodyModule,
    SectionItemModule,
    RouterModule,
    
  ],
  exports:[
    PruevasComponent
  ],
  providers:[
   // MockServicesService
  ]
})
export class PruevasModule { }
