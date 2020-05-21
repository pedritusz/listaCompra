import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonInterface } from 'src/app/interfaces/buttonInterface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  backgroundColor: string;
  width: string;
  text: string;
  action:string;
  textColor:string;

  @Input()buttonOptions : ButtonInterface;
  @Output() actionEmit = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {

    this.setWidth();
    this.text = this.buttonOptions.text;
    this.action = this.buttonOptions.action
    this.setBgColor();
    this.setTextColor();
    

  }

  actionClick($event){

    this.actionEmit.emit(this.action)
    
  }

  setWidth(){
    this.width = this.buttonOptions.width ? this.buttonOptions.width + '%' : '80%'
    
  }

  setBgColor(){

    this.backgroundColor = this.buttonOptions.bgColor ? this.buttonOptions.bgColor : 'yellow'

  }

  setTextColor(){

    this.textColor = this.buttonOptions.textColor ? this.buttonOptions.textColor : 'black'

  }
  
}
