import { ProductInterface } from './product.interface';

export interface ShoppingListInteface {

    name: number;
    user: number;
    products: [];
    shoppingCart: ProductInterface[];
    createData: Date;

}
