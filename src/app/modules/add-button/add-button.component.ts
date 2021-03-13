import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  @Input()inAction : string;
  @Output()outAction = new EventEmitter();
  constructor() { }

  onClick(){
    this.outAction.emit(this.inAction)

  }

}
