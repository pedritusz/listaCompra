import { QuantityTypeEnum } from '../enums/quantityTypeEnum';
import { SubItemListInterface } from './subItemListInput.interface';

export interface ItemListInputInterface {

    stock: number;
    minStock: number;
    cuantityType?: QuantityTypeEnum;
    clickAction: string;
    name: string;
    subItem?: SubItemListInterface;
    
}
