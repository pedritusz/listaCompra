import { ProductInterface } from '../interfaces/product.interface';

export class ItemProductForListClass {
    constructor(public product: ProductInterface){}
    // productos en stock v
    stock = this.product.availableStock ? this.product.availableStock : undefined ;
    // stock minimo deado v
    minStock = this.product.desiredStock ? this.product.desiredStock : undefined ;
    // si hemos añadido al producto una un idad de medida( litros, kg etc) la pondra si no, el typo de cantidad sera indefinido
    cuantityType = this.product.unitOfMesurement ? this.product.unitOfMesurement : undefined ;
    // ?
    clickAction = 'product';
    // si el producto tiene nombre lo añade # nota: no deveria añadirse producto sin nombre.
    name = this.product.name ? this.product.name : undefined ;
}
