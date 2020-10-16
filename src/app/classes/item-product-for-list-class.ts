import { ProductInterface } from '../interfaces/product.interface';

export class ItemProductForListClass {
    constructor(public product: ProductInterface){}
    stock = this.product.availableStock ? this.product.availableStock : undefined ;
    minStock = this.product.desiredStock ? this.product.desiredStock : undefined ;
    cuantityType = this.product.unitOfMesurement ? this.product.unitOfMesurement : undefined ;
    clickAction = 'product';
    name = this.product.name ? this.product.name : undefined ;
}
