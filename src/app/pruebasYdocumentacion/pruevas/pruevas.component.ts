import { Component, OnInit } from '@angular/core';
import { SectionItemInterface } from 'src/app/interfaces/section-item-interface';
import { ItemListInputInterface } from 'src/app/interfaces/itemListinputInterface';
import { MockServicesService } from '../mock-services.service';
@Component({
  selector: 'app-pruevas',
  templateUrl: './pruevas.component.html',
  styleUrls: ['./pruevas.component.scss']
})
export class PruevasComponent implements OnInit {

  ngOnInit(){
   
  }
  public optionSectionmock: SectionItemInterface = {

    background:'blue',
    action:'urlPrueva',
    title:'nevera'

  }

  constructor( public itemListMock: MockServicesService  ) { 



  }


}
