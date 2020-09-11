import { Injectable } from '@angular/core';
import { ItemProductListInterface } from '../interfaces/item-product-list.interface';
import { QuantityTypeEnum } from '../enums/quantityTypeEnum';
import { ButtonInterface } from '../interfaces/buttonInterface';

@Injectable({
  providedIn: 'root'
})

export class MockServicesService {

  constructor() {

    }

  itemList: ItemProductListInterface = {
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
