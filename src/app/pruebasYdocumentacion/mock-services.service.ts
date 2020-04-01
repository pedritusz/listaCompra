import { Injectable } from '@angular/core';
import { ItemListInputInterface } from '../interfaces/itemListinputInterface';
import { QuantityTypeEnum } from '../enums/quantityTypeEnum';

@Injectable({
  providedIn: 'root'
})

export class MockServicesService {

  constructor() { 
    console.log('mockService')
  }

  itemList: ItemListInputInterface = {
    
    clickAction: '/urlPrueva',
    minStock: 25,
    stock: 0,
    name: 'prueba',
    cuantityType: QuantityTypeEnum.units,
    subItem: {

      action: '/urlPrueba',
      name: 'SubItemPrueva',

    } 

  }

}
