import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionItemComponent } from '../section-item-component/section-item.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SectionItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SectionItemComponent
  ]
})
export class SectionItemModule { }
