import { Component } from '@angular/core';
import { SectionItemInterface } from 'src/app/interfaces/section-item-interface';
@Component({
  selector: 'app-pruevas',
  templateUrl: './pruevas.component.html',
  styleUrls: ['./pruevas.component.scss']
})
export class PruevasComponent  {

  public optionSectionmock: SectionItemInterface = {
    
    background:'blue',
    action:'urlPrueva',
    title:'nevera'

  }

  constructor() { }

 

}
