import { QuantityTypeEnum } from '../enums/quantityTypeEnum';

export interface ItemProductListInterface {

    stock: number;
    minStock: number;
    cuantityType?: QuantityTypeEnum;
    clickAction: string;
    name: string;

}
