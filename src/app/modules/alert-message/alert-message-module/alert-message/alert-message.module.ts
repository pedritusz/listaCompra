import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alertMessageComponent } from '../../alert-message-component/alert-message.component'



@NgModule({
  declarations: [
    alertMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    alertMessageComponent
  ]
})
export class AlertMessageModule { }
