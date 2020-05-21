import { Component, OnInit, Input } from '@angular/core';
import {TypeProjectEnum} from '../../../enums/typeAlert.enum';
@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  @Input()alertOptions: {
    message: string;
    type: TypeProjectEnum
  };

  constructor() { }

  ngOnInit(): void {
  }

}
