import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageBodyComponent } from '../../main-page-body-component/main-page-body.component'


@NgModule({
  declarations: [
    MainPageBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageBodyComponent
  ]
})
export class MainItemBodyModule { }
