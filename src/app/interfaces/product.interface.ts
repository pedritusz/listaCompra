import { QuantityTypeEnum } from '../enums/quantityTypeEnum';

export interface ProductInterface {
    _id: string;
    name: string;
    user: string;
    price: number;
    commerce: string;
    type: string;
    usual: boolean;
    availableStock: number;
    desiredStock: number;
    unitOfMesurement: QuantityTypeEnum;
    createData: Date;
}
