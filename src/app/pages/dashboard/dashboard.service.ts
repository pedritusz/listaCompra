import { Injectable } from '@angular/core';
import { SectionItemInterface } from 'src/app/interfaces/section-item-interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  sections: SectionItemInterface[] = [
    {
      action: 'goToLists',
      background: 'red',
      title: 'shopping lists'
    },
    {
      action: 'goToFridge',
      background: 'blue',
      title: 'fridge'
    }
  ];
}
