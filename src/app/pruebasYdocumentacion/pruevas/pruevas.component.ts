import { Component, OnInit, ViewChild } from '@angular/core';
import { SectionItemInterface } from 'src/app/interfaces/section-item-interface';
import { ItemListInputInterface } from 'src/app/interfaces/itemListinputInterface';
import { MockServicesService } from '../mock-services.service';
import { HorizontalScrollContainerComponent } from 'src/app/components/horizontal-scroll-container/horizontal-scroll-container.component';
@Component({
  selector: 'app-pruevas',
  templateUrl: './pruevas.component.html',
  styleUrls: ['./pruevas.component.scss']
})
export class PruevasComponent implements OnInit {
  @ViewChild(HorizontalScrollContainerComponent) hcc: HorizontalScrollContainerComponent;
  ngOnInit(){
   
  }
  public optionSectionmock: SectionItemInterface = {

    background:'blue',
    action:'urlPrueva',
    title:'nevera'

  }

  butonCmp($event){
    console.log($event)
  }

  change(){
    this.hcc.toSecondary()
  }
  constructor( public itemListMock: MockServicesService  ) { 

  }


}
