import { Injectable } from '@angular/core';
import { ItemListInputInterface } from '../interfaces/itemListinputInterface';
import { QuantityTypeEnum } from '../enums/quantityTypeEnum';
import { ButtonInterface } from '../interfaces/buttonInterface';

@Injectable({
  providedIn: 'root'
})

export class MockServicesService {

  constructor() {

    }

  itemList: ItemListInputInterface = {
    clickAction: '/prueva',
    minStock: 25,
    stock: 12,
    name: 'prueba',
    cuantityType: QuantityTypeEnum.units,
  };

  buttonMock: ButtonInterface =  {
    action: 'guapa',
    bgColor: 'green',
    text: 'irache',
    width: '80',
    textColor: 'yellow'
  };

}
