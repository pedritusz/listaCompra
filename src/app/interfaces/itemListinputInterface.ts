import { QuantityTypeEnum } from '../enums/quantityTypeEnum';

export interface ItemListInputInterface {

    stock: number;
    minStock: number;
    cuantityType?: QuantityTypeEnum;
    clickAction: string;
    name: string;
    
}
